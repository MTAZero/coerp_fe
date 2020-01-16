export interface Service {
  service_id?: string;
  service_type: string;
  service_name: string;
  description: string;
  service_price?: string;
  service_category?: string;
}

export interface ServiceCategory {
  service_category_id?: string;
  service_category_name: string;
  service_category_description?: string;
}
