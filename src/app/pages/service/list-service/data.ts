import { Service, ServiceCategory } from './list-service.model';

const serviceData: Service[] = [
  {
    service_id: 'SER01',
    service_type: 'Dịch vụ vận tải',
    service_name: 'Ship hàng',
    description: 'Trending',
    service_category: 'Vận tải',
    service_price: '100000đ/lượt'
  },
  {
    service_id: 'SER02',
    service_type: 'Dịch vụ vận tải',
    service_name: 'Xe ôm',
    description: 'Trending',
    service_category: 'Vận tải',
    service_price: '10000đ/lượt'
  },
  {
    service_id: 'SER03',
    service_type: 'Dịch vụ vận tải',
    service_name: 'Logistic',
    description: 'Trending',
    service_category: 'Vận tải',
    service_price: '10000000đ/lượt'
  }
];

const serviceCategoryData: ServiceCategory[] = [
  {
    service_category_id: 'SC01',
    service_category_name: 'Van Tai',
    service_category_description: 'ok'
  },
  {
    service_category_id: 'SC02',
    service_category_name: 'San xuat',
    service_category_description: ''
  }
];

export { serviceData, serviceCategoryData };
