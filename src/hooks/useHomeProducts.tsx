import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/axios.config";
import type { IProduct } from "../interfaces";

export const useHomeProducts = ({
  resource,
  queryKey,
  rowIndex,
  colIndex,
  type,
}: IProduct) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await axiosInstance.get(resource);
    
   console.log(data?.rows);
   
      
      console.log(data?.rows[rowIndex]?.columns[colIndex]?.module?.products);
      

      return data?.rows[rowIndex]?.columns[colIndex]?.module?.[type];
    },
  });
};
