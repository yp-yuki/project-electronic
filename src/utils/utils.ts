//获取localStorage
export const getLocalStorageItem = (item: string) => {
    if (!window || !window.localStorage) return null
    return window.localStorage.getItem(item)
}
//数组去重
export const uniqueArray = <T, K extends keyof T>(arr: T[], key: K): T[] => {
    return Array.from(new Map(arr.map(val => [val[key], val])).values())
}
//图片路径转换
export const getImageUrl = (url: string)=>{
    return new URL(`/src/assets/img/pro/${url}`,import.meta.url).href
}