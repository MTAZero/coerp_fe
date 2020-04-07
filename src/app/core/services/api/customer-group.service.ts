import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  load_all: '/api/customer-groups/all',
  load: `/api/customer-groups/search`,
  create: '/api/customer-group/create',
  update: `/api/customer-group/update`,
  delete: `/api/customer-group/delete`,
  chart: `/api/customer-groups/get-pie-chart`,
};

@Injectable()
export class CustomerGroupService {
  constructor(private httpClient: ApiService) {}

  loadAllCustomerGroup() {
    return this.httpClient.get(router.load_all);
  }

  loadCustomerGroup(filter?: { pageNumber: any; pageSize: any; cg_id: any; name: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.load, params);
  }

  createCustomerGroup(data: any) {
    const formData = mapToFormData(data);
    return this.httpClient.post(router.create, formData);
  }

  updateCustomerGroup(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.putFormData(router.update, formData);
  }

  removeCustomerGroup(filter?: { cg_id: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete, params);
  }

  loadChart() {
    return this.httpClient.get(router.chart);
  }
}
