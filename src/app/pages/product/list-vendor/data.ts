import { Vendor, VendorType } from './list-vendor.model';

const vendorData: Vendor[] = [
  {
    vendor_id: 'VEN01',
    vendor_name: 'Company A',
    vendor_address: 'Ha Noi',
    vendor_phone: '0122443111',
    vendor_contact_name: 'Mr. Trung',
    vendor_contact_phone: '0123222111',
    vendor_type: 'Vận chuyển'
  },
  {
    vendor_id: 'VEN02',
    vendor_name: 'Company A',
    vendor_address: 'Ha Noi',
    vendor_phone: '0122443111',
    vendor_contact_name: 'Mr. Trung',
    vendor_contact_phone: '0123222111',
    vendor_type: 'Vận chuyển'
  },
  {
    vendor_id: 'VEN03',
    vendor_name: 'Company A',
    vendor_address: 'Ha Noi',
    vendor_phone: '0122443111',
    vendor_contact_name: 'Mr. Trung',
    vendor_contact_phone: '0123222111',
    vendor_type: 'Vận chuyển'
  },
  {
    vendor_id: 'VEN04',
    vendor_name: 'Company A',
    vendor_address: 'Ha Noi',
    vendor_phone: '0122443111',
    vendor_contact_name: 'Mr. Trung',
    vendor_contact_phone: '0123222111',
    vendor_type: 'Vận chuyển'
  }
];

const vendorTypeData: VendorType[] = [
  {
    vendor_type_id: 'VT01',
    vendor_type_name: 'Vận chuyển',
    vendor_type_description: ''
  },
  {
    vendor_type_id: 'VT02',
    vendor_type_name: 'Sản xuất',
    vendor_type_description: ''
  }
];

export { vendorData, vendorTypeData };
