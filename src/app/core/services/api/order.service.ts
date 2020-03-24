import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  get_all_page: `/api/customer-orders/search`,
  get_by_id: `/api/customer-orders/infor`,
  create: `/api/customer-orders/create`,
  update: `/api/customer-orders/update`,
  delete: `/api/customer_orders/delete`,
  payment_method: `/api/customer-orders/get-all-payment`,
  order_status: '/api/customer-orders/status',
  update_status: '/api/customer-orders/update-status',
  export: '/api/customer-order/export'
};

@Injectable()
export class OrderService {
  constructor(private httpClient: ApiService) {}

  loadOrder(filter?: {
    pageNumber: any;
    pageSize: any;
    payment_type_id: any;
    code: any;
    start_date: any;
    end_date: any;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_all_page, params);
  }

  exportOrder(filter?: {
    pageNumber: any;
    pageSize: any;
    payment_type_id: any;
    name: any;
    start_date: any;
    end_date: any;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.export, params);
  }

  createOrder(data: any) {
    return this.httpClient.post(router.create, data);
  }

  updateOrder(data?: any) {
    return this.httpClient.putFormData(router.update, data);
  }

  removeOrder(filter?: { customer_orderId: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete, params);
  }

  loadPaymentMethod() {
    return this.httpClient.get(router.payment_method);
  }

  loadOrderById(filter?: { id: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_by_id, params);
  }

  loadOrderStatus() {
    return this.httpClient.get(router.order_status);
  }

  updateOrderStatus(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.put(router.update_status, formData);
  }
}
