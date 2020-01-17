export interface Product {
  product_id?: string;
  product_name: string;
  quantity: number;
  in_price: number;
  out_price: number;
  unit: string;
  product_type: string;
  vendor: string;
  tax: string;
  expired_date?: string;
  weight?: number;
  created_date: string;
  promotion?: string;
  short_description?: string;
  full_description?: string;
}

export interface Unit {
  unit_id?: string;
  unit_name: string;
}

export interface ProductType {
  product_type_id?: string;
  product_type_name: string;
  product_type_description?: string;
  product_type_status?: string;
  created_date?: string;
}
