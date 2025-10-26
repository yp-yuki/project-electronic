import type { ApiResponse, GetProductsParam, Product } from '@/types/apiType'
import mockProductsData from './data/products.json'

export const mockProducts: Product[] = mockProductsData

// 模拟获取商品列表
export const productApi = {
	getProducts: async (params?: GetProductsParam): Promise<ApiResponse<Product[]>> => {
		const data = [...mockProducts]
		const { page = 1, limit = 12, loadMoreLimit = 0 } = params || {}
		const total = data.length
		const totalPage = Math.ceil(total / limit)
		const startIndex = loadMoreLimit
		const endIndex = startIndex + limit
		const pageData = data.slice(startIndex, endIndex)
		return {
			code: 200,
			message: 'success',
			data: pageData,
			pagination: {
				total,
				totalPage,
				haveNext: endIndex < total,
				havePrev: page > 1
			}
		}
	}
}
