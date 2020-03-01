import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  get_all_page: `/api/customer-orders/search`,
  get_by_id: `/api/customer-orders/infor`,
  create: `/api/customer-orders/create`,
  update: `/api/customer-orders/update`,
  delete: `/api/customer_orders/delete`,
  payment_method: `/api/customer-orders/get-all-payment`
};

@Injectable()
export class OrderService {
  constructor(private httpClient: ApiService) {}

  loadOrder(filter?: { pageNumber: any; pageSize: any; payment_type_id: any; code: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_all_page, params);
  }

  createOrder(data: any) {
    const formData = mapToFormData(data);
    return this.httpClient.post(router.create, formData);
  }

  updateOrder(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.putFormData(router.update, formData);
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
}
