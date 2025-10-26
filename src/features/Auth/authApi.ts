import type { ApiResponse } from '@/types/apiType'

interface UserInfo {
	username: string
	token?: string
}
interface AuthRequest {
	username: string
	password: string
}
const userList: AuthRequest[] = [
	{ username: 'admin', password: 'qwer1234' },
	{ username: 'testuser', password: '123456' }
]
export const loginApi = async (
	data: AuthRequest
): Promise<ApiResponse<UserInfo>> => {
	await new Promise((resolve) => setTimeout(resolve, 800))
	const user = userList.find((u) => u.username === data.username)
	if (!user) {
		throw {
			code: 404,
			message: '用户不存在',
			data: null as never
		}
	}
	if (user.password !== data.password) {
		throw {
			code: 401,
			message: '用户名或密码错误',
			data: null as never
		}
	}
	return {
		code: 200,
		message: '登录成功',
		data: {
			username: data.username,
			token: `mock-token-${data.username}-${Date.now()}`
		}
	}
}

export const registerApi = async (
	data: AuthRequest
): Promise<ApiResponse<UserInfo>> => {
	await new Promise((resolve) => setTimeout(resolve, 800))
	const user = userList.find((u) => u.username === data.username)
	if (user) {
		throw {
			code: 409,
			message: '用户名已存在',
			data: null as never
		}
	}
	userList.push(data)
	return {
		code: 201,
		message: '注册成功',
		data: {
			username: data.username,
			token: `mock-token-${data.username}-${Date.now()}`
		}
	}
}
