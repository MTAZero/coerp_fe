import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  search_order_service: '/api/customer_order_service/search',
  info_order_service: '/api/customer_order_service/get_by_id',
  create_order_service: '/api/customer_order_service/create',
  update_order_service: '/api/customer_order_service/update',
  delete_order_service: '/api/customer_order_service/delete',
  gen_work_time: '/api/customer_order_service/gen_work_time',
  get_free_staff: '/api/customer_order_service/get_staffs_free',
  //pending
  get_all: `/api/service/get-search-infor`,
  create: `/api/service/create`,
  update: `/api/service/update`,
  delete: `/api/service/delete`,
  get_category: '/api/service-category/get-name',
  get_type: '/api/service/get-type',
  get_calendar: '/api/customer-orders/service_by_date',
};

@Injectable()
export class ServiceService {
  constructor(private httpClient: ApiService) {}

  loadServices(filter?: { pageSize: number; pageNumber: number; search_name: string }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_all, params);
  }

  createService(data: any) {
    const formData = mapToFormData(data);
    return this.httpClient.post(router.create, formData);
  }

  updateService(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.putFormData(router.update, formData);
  }

  removeService(filter?: { serviceId: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete, params);
  }

  getCategory() {
    return this.httpClient.get(router.get_category);
  }

  getType() {
    return this.httpClient.get(router.get_type);
  }

  getCalendar(filter?: { start_date: any; to_date: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_calendar, params);
  }

  loadOrderServiceInfo(filter?: { cuo_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.info_order_service, params);
  }

  searchOrderService(filter?: {
    pageSize: number;
    pageNumber: number;
    search_name: string;
    start_date: string;
    end_date: string;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.search_order_service, params);
  }

  createOrderService(data: any) {
    return this.httpClient.post(router.create_order_service, data);
  }

  updateOrderService(data?: any) {
    return this.httpClient.putFormData(router.update_order_service, data);
  }

  removeOrderService(filter?: { cuo_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete, params);
  }

  genWorkTime(filter?: { pageNumber: number; pageSize: number }, body?: any) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.post(router.gen_work_time, body, params);
  }

  getFreeStaff(filter?: { fullName: string }, body?: any) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.post(router.get_free_staff, body, params);
  }
}
