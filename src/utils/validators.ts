export const userValidator = {
	usernameRules: [
		{ required: true, message: '请输入用户名!' },
		{ min: 4, message: '用户名至少4个字符' },
		{ max: 10, message: '用户名不能超过10个字符' },
		{
			pattern: /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/,
			message: '用户名只能包含汉字、字母、数字和下划线!'
		}
	],
	passwordRules: [
		{ required: true, message: '请输入密码!' },
		{ min: 6, message: '密码至少6个字符' },
		{ max: 16, message: '密码不能超过16个字符' },
		{
			pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!@])[a-zA-Z\d.!@]+$/,
			message: '密码必须包含大小写字母、数字和特殊符号(.!@)!'
		}
	]
}
