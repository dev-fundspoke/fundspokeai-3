export interface UploadResult {
  url: string
  filename: string
}

export interface StorageError extends Error {
  code: string
}