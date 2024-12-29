export interface UploadProgress {
  bytesTransferred: number
  totalBytes: number
  progress: number
}

export interface UploadResult {
  url: string
  filename: string
}

export interface UploadError extends Error {
  code: string
}

export type ProgressCallback = (progress: UploadProgress) => void