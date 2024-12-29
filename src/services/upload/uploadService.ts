import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../../config/firebase'
import { UploadResult, UploadProgress, ProgressCallback } from './types'

class UploadService {
  private static instance: UploadService
  
  private constructor() {}

  static getInstance(): UploadService {
    if (!UploadService.instance) {
      UploadService.instance = new UploadService()
    }
    return UploadService.instance
  }

  async uploadFile(
    file: File, 
    directory: string,
    onProgress?: ProgressCallback
  ): Promise<UploadResult> {
    const path = `${directory}/${Date.now()}_${file.name}`
    const storageRef = ref(storage, path)
    const uploadTask = uploadBytesResumable(storageRef, file)

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          if (onProgress) {
            const progress: UploadProgress = {
              bytesTransferred: snapshot.bytesTransferred,
              totalBytes: snapshot.totalBytes,
              progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            }
            onProgress(progress)
          }
        },
        (error) => {
          reject(error)
        },
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref)
            resolve({
              url,
              filename: file.name
            })
          } catch (error) {
            reject(error)
          }
        }
      )
    })
  }

  async uploadCompanyLogo(
    file: File,
    onProgress?: ProgressCallback
  ): Promise<UploadResult> {
    return this.uploadFile(file, 'companies/logos', onProgress)
  }
}

export const uploadService = UploadService.getInstance()