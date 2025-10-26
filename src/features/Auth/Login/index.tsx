import { Form, Input, Button, message, type FormProps } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { userValidator } from '@/utils/validators'
import { loginApi } from '../authApi'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
	const [form] = Form.useForm()
    const navigate = useNavigate()
	const { setItem } = useLocalStorage()
    const [loading, setLoading] = useState<boolean>(false)

	const handleLogin = async (values: {
		username: string
		password: string
	}) => {
		try {
            setLoading(true)
			const response = await loginApi({
				username: values.username,
				password: values.password
			})
			setItem('userInfo', response.data)
            navigate('/home')

		} catch (error) {
			const errorResponse = error as { message?: string }
			message.error(errorResponse.message || '登录失败')
		}finally{
            setLoading(false)
        }
	}
    const handleFinishFailed: FormProps['onFinishFailed'] = (errorInfo)=>{
        console.log('表单校验失败',errorInfo)
    }
	return (
		<Form layout="horizontal" form={form} onFinish={handleLogin} onFinishFailed={handleFinishFailed}>
			<Form.Item
				name="username"
				rules={userValidator.usernameRules}
				validateFirst
			>
				<Input prefix={<UserOutlined />} placeholder="请输入用户名" />
			</Form.Item>

			<Form.Item
				name="password"
				rules={userValidator.passwordRules}
				validateFirst
			>
				<Input.Password prefix={<LockOutlined />} placeholder="请输入密码" />
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" loading={loading} block>
					登录
				</Button>
			</Form.Item>
		</Form>
	)
}
export default Login
