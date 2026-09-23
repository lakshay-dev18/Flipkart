import { ImageSourcePropType } from 'react-native';


interface Variant {
  color: string;
  colorMoreOptions: string;
  storage: string;
  storageMoreOptions: string;
  select:string;
}
export interface ProductData {
  name: string;
  rating: string;
  ratingLabel: string;
  ratingCount: string;
  fassured: boolean;
  pricedecrease: string;
  notthis: string;
  price: string;
  emi: string;
  emiPlan: string;
  payOption: string;
  packagingFee: string;
  bankoffer: string;
  variant: Variant;
  route: string;
  phoneimage: ImageSourcePropType[]; 
  assuredImage:ImageSourcePropType;
  id: string;
}