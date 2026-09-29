import { FlatList, ListRenderItem } from "react-native";

type Props<T> ={
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor?: (item: T, index: number) => string;
  horizontal?: boolean;
}

export default function FlatlistHelper<T>({data,renderItem,keyExtractor,horizontal}:Props<T>){
    return(
        <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} horizontal={horizontal}/>
    )
}