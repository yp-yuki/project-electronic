export const useLocalStorage = () => {
	const setItem = <T>(key: string, value: T) => {
		const seriallizedValue = JSON.stringify(value)
		localStorage.setItem(key, seriallizedValue)
	}
	const getItem = (key: string) => {
		const item = localStorage.getItem(key)
		return item ? JSON.parse(item) : null
	}
	const removeItem = (key: string) => {
		localStorage.removeItem(key)
	}
	return { setItem, getItem, removeItem }
}
