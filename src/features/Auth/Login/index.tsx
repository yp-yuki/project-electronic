import { Form, Input, Button } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { userValidator } from '@/utils/validators'

const Login = () => {
	const handleLogin = () => {
        
    }
	return (
		<Form layout="horizontal">
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
				<Button type="primary" htmlType="submit" onClick={handleLogin} block>
					登录
				</Button>
			</Form.Item>
		</Form>
	)
}
export default Login
