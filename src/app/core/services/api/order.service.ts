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
  export_product: '/api/customer-order/export',
  import_product: '/api/customer_order_product/import',
  export_template_product: '/api/customer_order_product/export_template',
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

  exportOrderProduct(filter?: {
    pageNumber: any;
    pageSize: any;
    payment_type_id: any;
    name: any;
    start_date: any;
    end_date: any;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.export_product, params);
  }

  importOrderProduct(file: any) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.postFormData(router.import_product, formData);
  }

  exportTemplateProduct() {
    return this.httpClient.get(router.export_template_product);
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
