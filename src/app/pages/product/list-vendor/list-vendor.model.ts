export interface Vendor {
  vendor_id?: string;
  vendor_name: string;
  vendor_address: string;
  vendor_phone: string;
  vendor_contact_name: string;
  vendor_contact_phone: string;
  vendor_type: string;
}

export interface VendorType {
  vendor_type_id?: string;
  vendor_type_name: string;
  vendor_type_description?: string;
}
