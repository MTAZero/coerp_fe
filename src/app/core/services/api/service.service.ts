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

  info_service: '/api/service/get_by_id',
  search_service: `/api/service/search`,
  create_service: `/api/service/create`,
  update_service: `/api/service/update`,
  delete_service: `/api/service/delete`,
  get_category: '/api/service/get_category',
  get_type: '/api/service/get_type',
  export_service: '/api/customer_order_service/export',
  import_service: '/api/customer_order_service/import',
  export_template_service: '/api/customer_order_service/export_template',
  //pending
  get_calendar: '/api/customer-orders/service_by_date',
};

@Injectable()
export class ServiceService {
  constructor(private httpClient: ApiService) {}

  loadServiceInfo(filter?: { se_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.info_service, params);
  }

  searchService(filter?: { 
    pageSize: number; 
    pageNumber: number; 
    search_name: string }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.search_service, params);
  }

  createService(data: any) {
    const formData = mapToFormData(data);
    return this.httpClient.post(router.create_service, formData);
  }

  updateService(data?: any) {
    const form = mapToFormData(data);
    return this.httpClient.putFormData(router.update_service, form);
  }

  removeService(filter?: { serviceId: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete_service, params);
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
    return this.httpClient.delete(router.delete_order_service, params);
  }

  genWorkTime(filter?: { pageNumber: number; pageSize: number }, body?: any) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.post(router.gen_work_time, body, params);
  }

  getFreeStaff(filter?: { fullName: string }, body?: any) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.post(router.get_free_staff, body, params);
  }

  exportOrderService(filter?: {
    pageNumber: any;
    pageSize: any;
    search_name: any;
    start_date: any;
    end_date: any;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.export_service, params);
  }

  importOrderService(file: any) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.postFormData(router.import_service, formData);
  }

  exportTemplateService() {
    return this.httpClient.get(router.export_template_service);
  }
}
