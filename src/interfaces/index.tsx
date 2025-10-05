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
export interface IProduct {
  resource: string;
  queryKey: string[];
  rowIndex: number;
  colIndex: number;
  type: string;
}

// !############# related to api response
export interface IResponseNameAndDescription {
  localeCode: string;
  value: string;
}

export interface IResponseImage {
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
  name: IResponseNameAndDescription[];
  shortDescription: IResponseNameAndDescription[];
  inStock?: boolean;
  images: IResponseImage[];
  rating?: number;
  isActive?: boolean;
  slug?: string;
}
// !##################

// ^ ############# home category

export interface IHomeCategory {
  name: IResponseNameAndDescription[];
  image: IResponseImage;
  id: number | string;
}
export interface IBannerSectionResponse {
  image: IResponseImage[];
  title: IResponseNameAndDescription[];
  name: string;
  type: string;
}

export interface IHomeBrand {
  image: IResponseImage[];
  id: string | number;
  name: IResponseNameAndDescription;
  slug?: string;
  logo: {
    name: string;
    url: string;
  };
}
