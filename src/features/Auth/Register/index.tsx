import { Form, Input, Button } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { userValidator } from '@/utils/validators'

const Register = () => {
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

			<Form.Item
				name="confirmPassword"
				rules={[
					{
						required: true,
						message: '请再次输入密码'
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve()
							}
							return Promise.reject(new Error('两次输入的密码不一致'))
						}
					})
				]}
			>
				<Input.Password
					prefix={<LockOutlined />}
					placeholder="请再次输入密码"
				/>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" block>
					注册
				</Button>
			</Form.Item>
		</Form>
	)
}
export default Register
