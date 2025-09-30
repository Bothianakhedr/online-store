import type { JSX } from "react";

export interface IRegisterForm {
  type: string;
  placeholder: string;
  label: string;
  id: string;
  icon: JSX.Element;
  rightIcon?: JSX.Element;
  width?: string;
}




















// related to  custom hook 
 export interface IProduct{
    url:string,
    queryKey:string[]
    rowIndex :number,
    colIndex:number,
    type:string
}

// !############# related to api response
export interface IProductNameAndDescription {
  localeCode: string;
  value: string;
}

export interface IProductImage {
  name: string;
  url: string;
  width: number;
  height: number;
}
export interface IProductCard {
  badge: string;
  id: number | string;
  price: number;
  salePrice: number;
  name: IProductNameAndDescription [];
  shortDescription: IProductNameAndDescription [];
  inStock?: boolean;
  images: IProductImage[];
  rating?: number;
  isActive?: boolean;
  slug?: string;
}
// !##################


// ^ ############# home category

export interface IHomeCategory{
  name:IProductNameAndDescription[]
  image:IProductImage
  id:number| string
}