import { type Product } from '../types'
import mockProductsData from './data/products.json'

export const mockProducts: Product[] = mockProductsData

// 模拟获取商品列表
export const mockProductApi = {
  getProducts: async () => {
    const data = [...mockProducts];
    
    return {
      code: 200,
      message: 'success',
      data: data
    }
  }
}