import ApiHelper from '../../../shared/components/api-helper/ApiHelper';
import { useQuery } from '@tanstack/react-query';
import {ProductItem} from '../../../shared/components/interface/ProductItems'
const API1_BODY = process.env.EXPO_PUBLIC_BASE_URL;


const fetchCategories = (method: string): Promise<ProductItem[]> => {
  return ApiHelper(`${API1_BODY}/search`, method='Get'); 
};


export const useProducts = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories('GET'),
  });
};

export default useProducts;
