import { Order } from './list-order.model';

const orderData: Order[] = [
  {
    order_id: 'OR01',
    order_date: '01/01/2019',
    payment_status: 'Đã thanh toán',
    order_total: '1000 vnđ',
    payment_method: 'AirPay',
    order_status: 'Đang vận chuyển'
  },
  {
    order_id: 'OR02',
    order_date: '01/01/2019',
    payment_status: 'Đã thanh toán',
    order_total: '1000 vnđ',
    payment_method: 'ViettelPay',
    order_status: 'Đang vận chuyển'
  },
  {
    order_id: 'OR03',
    order_date: '01/01/2019',
    payment_status: 'Đã thanh toán',
    order_total: '1000 vnđ',
    payment_method: 'VisaCard',
    order_status: 'Đã nhận hàng'
  }
];

export { orderData };
