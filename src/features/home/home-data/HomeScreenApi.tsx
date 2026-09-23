import ApiHelper from '../../../shared/components/api-helper/ApiHelper';
import { useQuery } from '@tanstack/react-query';
import {CategoryItem} from '../../../shared/components/interface/CategoryItemInterface'
const API1_BODY = process.env.EXPO_PUBLIC_BASE_URL;


const fetchCategories = (method?: string): Promise<CategoryItem[]> => {
  return ApiHelper(`${API1_BODY}/Home`, method); 
};


export const useCategories = (method: string) => {
  return useQuery({
    queryKey: ['categories', method],
    queryFn: () => fetchCategories(method),
  });
};

export default useCategories;
