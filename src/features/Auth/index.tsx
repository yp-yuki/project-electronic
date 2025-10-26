import { Card } from 'antd'
import styles from './index.module.scss'
import Login from './Login'
import { useState } from 'react'
import Register from './Register'

const LoginPage = () => {
	const [isRegister, setIsRegister] = useState<boolean>(false)
	const handleRegister = () => {
		setIsRegister(!isRegister)
	}
	return (
		<div className={styles.login}>
			<Card
				title={isRegister ? '注册账号' : '用户登录'}
				style={{ width: 300 }}
				extra={
					<a onClick={handleRegister}>{isRegister ? '登录' : '注册'}</a>
				}
			>
				{isRegister ? <Register /> : <Login />}
				<div className="auth-links">
					<a href="#">忘记密码？</a>
				</div>
			</Card>
		</div>
	)
}
export default LoginPage
