import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  get_all: `/api/service/get-all-search`,
  create: `/api/service/create`,
  update: `/api/service/update`,
  delete: `/api/service/delete`,
  get_category: '/api/service-category/get-name',
  get_type: '/api/service/get-type'
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
}
