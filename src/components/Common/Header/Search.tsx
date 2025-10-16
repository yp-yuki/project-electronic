import { Input, type GetProps } from 'antd'


const { Search } = Input
type SearchProps = GetProps<typeof Input.Search>
const AppSearch = () => {
    const onSearch: SearchProps['onSearch'] = value => {
        console.log(value)
    }
    return <Search placeholder="请输入搜索内容" allowClear onSearch={onSearch} style={{ width: 250 }} />
}
export default AppSearch