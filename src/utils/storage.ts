export function getLocalStorageItem(item: string){
    if(!window || !window.localStorage) return null
    return window.localStorage.getItem(item)
}