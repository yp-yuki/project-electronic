export interface ApiResponse<T = any> {
    code: number
    message: string
    data: T
    pagination?: {
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
export interface Sku {
    id: string
    specs: string[]
    price: number
    stock: number
}
export interface Value {
    name: string
    valid?: boolean
    selected?: boolean
}
export interface Specifications {
    name: string
    values: string[]
}
export interface Product {
    id: number
    name: string
    price: number
    sales: number
    image: string
    description?: string
    stock: number
    category: string
    specifications: Specifications[]
    skuList: Sku[]
    selectedSku: string
}
export interface GetProductsParam {
    page?: number
    limit?: number
    loadMoreLimit?: number
    keywords?: string
}