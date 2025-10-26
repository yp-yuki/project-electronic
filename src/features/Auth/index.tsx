import styles from './index.module.scss'
import { Card, Form, Input, Button } from 'antd'

const Login = () => {
	return (
		<div className={styles.login}>
			<Card
				title="用户登录"
				style={{ width: 300 }}
				extra={<a href="#">注册账号</a>}
			>
				<Form layout="horizontal">
					<Form.Item  name="username">
						<Input placeholder="请输入用户名" />
					</Form.Item>

					<Form.Item name="password">
						<Input.Password placeholder="请输入密码" />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" block>
							登录
						</Button>
					</Form.Item>
				</Form>

				<div className="auth-links">
					<a href="#">忘记密码？</a>
				</div>
			</Card>
		</div>
	)
}
export default Login
