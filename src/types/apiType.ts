export interface ApiResponse<T = any> {
    code: number
    message: string
    data: T
    pagination?:{
        total?: number
        totalPage?: number
        haveNext?: boolean
        havePrev?: boolean
    }
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
export interface GetProductsParam{
    page?: number,
    limit?: number,
    loadMoreLimit?: number
    keywords?: string
}