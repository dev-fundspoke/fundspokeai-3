import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../config/firebase'

interface UploadState {
  progress: number
  uploading: boolean
  error: string | null
  url: string | null
}

export function useFileUpload(directory = 'company-files') {
  const [state, setState] = useState<UploadState>({
    progress: 0,
    uploading: false,
    error: null,
    url: null
  })

  const uploadFile = async (file: File) => {
    if (!file) return

    try {
      setState(prev => ({ ...prev, uploading: true, error: null }))
      
      const storageRef = ref(storage, `${directory}/${Date.now()}_${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      return new Promise<string>((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setState(prev => ({ ...prev, progress }))
          },
          (error) => {
            setState(prev => ({ 
              ...prev, 
              error: error.message, 
              uploading: false 
            }))
            reject(error)
          },
          async () => {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
            setState(prev => ({ 
              ...prev, 
              url: downloadUrl, 
              uploading: false 
            }))
            resolve(downloadUrl)
          }
        )
      })
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        error: error instanceof Error ? error.message : 'Upload failed', 
        uploading: false 
      }))
      throw error
    }
  }

  return {
    ...state,
    uploadFile
  }
}