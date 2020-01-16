export interface Customer {
  customer_id?: string;
  customer_name: string;
  source?: string;
  phone: string;
  dob?: string;
  email: string;
  address?: string;
  customer_type: string;
  position?: string;
  customer_group: string;
  created_date?: string;
  note?: string;
}

export interface Source {
  source_id?: string;
  source_name: string;
  description?: string;
}

export interface CustomerType {
  type_id?: string;
  customer_type: string;
}

export interface CustomerGroup {
  group_id?: string;
  customer_group: string;
  description?: string;
  created_date?: string;
}
