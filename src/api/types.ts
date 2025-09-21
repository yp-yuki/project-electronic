export interface ApiResponse<T = any> {
    code: number
    message: string
    data: T
    total?: number
}
export interface User {
    id: number
    name: string
}
export interface Product {
    id: number,
    name: string,
    price: number,
    sales: number,
    image: string,
    description?: string,
    stock?: number
}