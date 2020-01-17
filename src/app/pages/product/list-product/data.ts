import { Product, Unit, ProductType } from './list-product.model';

const productData: Product[] = [
  {
    product_id: 'PRO01',
    product_name: 'Gạo nếp',
    quantity: 50,
    in_price: 15000,
    out_price: 20000,
    unit: 'kg',
    product_type: 'Lương thực',
    vendor: 'Company A',
    tax: '10%',
    expired_date: '01/01/2022',
    weight: 0,
    created_date: '01/01/2020',
    promotion: '',
    short_description: 'Gạo ngon',
    full_description: 'Loại gạo ngon nhất Việt Nam'
  },
  {
    product_id: 'PRO02',
    product_name: 'Gạo tẻ',
    quantity: 50,
    in_price: 15000,
    out_price: 20000,
    unit: 'kg',
    product_type: 'Lương thực',
    vendor: 'Company A',
    tax: '10%',
    expired_date: '01/01/2022',
    weight: 0,
    created_date: '01/01/2020',
    promotion: '',
    short_description: 'Gạo ngon',
    full_description: 'Loại gạo ngon nhì Việt Nam'
  },
  {
    product_id: 'PRO03',
    product_name: 'Gạo lứt',
    quantity: 50,
    in_price: 15000,
    out_price: 20000,
    unit: 'kg',
    product_type: 'Lương thực',
    vendor: 'Company A',
    tax: '10%',
    expired_date: '01/01/2022',
    weight: 0,
    created_date: '01/01/2020',
    promotion: '',
    short_description: 'Gạo ngon',
    full_description: 'Loại gạo ngon Top3 Việt Nam'
  }
];

const unitData: Unit[] = [
  {
    unit_id: 'UNI01',
    unit_name: 'kg'
  },
  {
    unit_id: 'UNI02',
    unit_name: 'km'
  }
];

const productTypeData: ProductType[] = [
  {
    product_type_id: 'PT01',
    product_type_name: 'Lương thực',
    product_type_description: '',
    product_type_status: 'OK',
    created_date: '01/01/2020'
  },
  {
    product_type_id: 'PT02',
    product_type_name: 'Thực phẩm',
    product_type_description: '',
    product_type_status: 'Not OK',
    created_date: '01/01/2020'
  }
];

export { productData, unitData, productTypeData };
