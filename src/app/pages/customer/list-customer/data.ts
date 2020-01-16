import {
  Customer,
  Source,
  CustomerType,
  CustomerGroup
} from './list-customer.model';

const customerData: Customer[] = [
  {
    customer_id: 'KH01',
    customer_name: 'Hà Thị Quyết',
    source: 'BNI',
    phone: '0355893261',
    dob: '01/01/1990',
    email: 'quyet111196@gmail.com',
    address: 'Hà Nội',
    customer_type: 'Bán lẻ',
    position: 'Abc',
    customer_group: 'Khách hàng thân thiết',
    created_date: '01/01/2020',
    note: 'Không'
  },
  {
    customer_id: 'KH01',
    customer_name: 'Hà Thị Quyết',
    source: 'BNI',
    phone: '0355893261',
    dob: '01/01/1990',
    email: 'quyet111196@gmail.com',
    address: 'Hà Nội',
    customer_type: 'Bán lẻ',
    position: 'Abc',
    customer_group: 'Khách hàng thân thiết',
    created_date: '01/01/2020',
    note: 'Không'
  },
  {
    customer_id: 'KH01',
    customer_name: 'Hà Thị Quyết',
    source: 'BNI',
    phone: '0355893261',
    dob: '01/01/1990',
    email: 'quyet111196@gmail.com',
    address: 'Hà Nội',
    customer_type: 'Bán lẻ',
    position: 'Abc',
    customer_group: 'Khách hàng thân thiết',
    created_date: '01/01/2020',
    note: 'Không'
  },
  {
    customer_id: 'KH01',
    customer_name: 'Hà Thị Quyết',
    source: 'BNI',
    phone: '0355893261',
    dob: '01/01/1990',
    email: 'quyet111196@gmail.com',
    address: 'Hà Nội',
    customer_type: 'Bán lẻ',
    position: 'Abc',
    customer_group: 'Khách hàng thân thiết',
    created_date: '01/01/2020',
    note: 'Không'
  }
];

const sourceData: Source[] = [
  {
    source_id: 'S01',
    source_name: 'BNI',
    description: ''
  },
  {
    source_id: 'S02',
    source_name: 'ATM',
    description: ''
  },
  {
    source_id: 'S03',
    source_name: 'SJC',
    description: ''
  }
];

const customerTypeData: CustomerType[] = [
  {
    type_id: 'T01',
    customer_type: 'Bán lẻ'
  },
  {
    type_id: 'T02',
    customer_type: 'Bán buôn'
  }
];

const customerGroupData: CustomerGroup[] = [
  {
    group_id: 'G01',
    customer_group: 'Khách hàng thân thiết',
    description: 'VIP',
    created_date: '01/01/2020'
  },
  {
    group_id: 'G02',
    customer_group: 'Khách hàng thường',
    description: 'Normal',
    created_date: '05/01/2020'
  }
];

export { customerData, sourceData, customerTypeData, customerGroupData };
