import { StyleProp, TextInput, TextStyle, } from 'react-native'
import { useState , useEffect} from 'react'
import useProducts from '../../../features/search/api-data/ProductData'

type Search ={
    style?: StyleProp<TextStyle>;
    onFilterChange: (filteredItems: any[]) => void 
}


export default function SearchField({style, onFilterChange}:Search){
    const { data} = useProducts();
    const[search,setSearch] = useState('')
    
    useEffect(() => {
        const searchResult = search.trim().toLowerCase()

        const filteredData = data?.filter((item) => {
            return item.name.toLowerCase().includes(searchResult)
        }) ?? []

        onFilterChange(filteredData)
    }, [search, data])
  
    return(
        <TextInput style={style} placeholder='Enter Here...' value={search} onChangeText={setSearch}  returnKeyType="search" />
    )
}