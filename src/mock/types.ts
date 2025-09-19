export interface ApiResponse<T = any>{
    code: number
    message: string
    data: T
    total?: number
}
export interface User{
    id: number
    name: string
}