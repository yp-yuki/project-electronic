import type { ApiResponse } from '@/types/apiType'

interface UserInfo {
	username: string
	token?: string
}
interface UserRecord {
	username: string
	password: string
}

class MockUserDB {
	private users: UserRecord[] = [
		{ username: 'admin', password: 'qwer1234' },
		{ username: 'testuser', password: '123456' }
	]
	findUserByUsername(username: string): UserRecord | undefined {
		return this.users.find((u) => u.username === username)
	}
	createUser(userData: UserRecord): UserRecord {
		this.users.push(userData)
		return userData
	}
}

const userDB = new MockUserDB()
export const loginApi = async (data: {
	username: string
	password: string
}): Promise<ApiResponse<UserInfo>> => {
	await new Promise((resolve) => setTimeout(resolve, 800))
	const user = userDB.findUserByUsername(data.username)
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

export const registerApi = async (data: {
	username: string
	password: string
}): Promise<ApiResponse<UserInfo>> => {
	await new Promise((resolve) => setTimeout(resolve, 800))
	const user = userDB.findUserByUsername(data.username)
	if (user) {
		throw {
			code: 409,
			message: '用户名已存在',
			data: null as never
		}
	}
	userDB.createUser(data)
	return {
		code: 201,
		message: '注册成功',
		data: {
			username: data.username,
			token: `mock-token-${data.username}-${Date.now()}`
		}
	}
}
