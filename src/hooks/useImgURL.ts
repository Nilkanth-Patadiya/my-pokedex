export const useImgURL = (path: string) => {
  return new URL(path, import.meta.url).href
}
