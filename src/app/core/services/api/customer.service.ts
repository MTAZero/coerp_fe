import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  get_all_page: `/api/customers/search`,
  create: `/api/customers/create`,
  update: `/api/customers/update`,
  delete: `/api/customers/delete`,
  source: `/api/sources/all`,
  type: `/api/customers/type`,
  group: `/api/customer-groups/all`
};

@Injectable()
export class CustomerService {
  constructor(private httpClient: ApiService) {}

  loadCustomer(filter?: {
    pageNumber: any;
    pageSize: any;
    source_id: any;
    cu_type: any;
    customer_group_id: any;
    name: any;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_all_page, params);
  }

  createCustomer(data: any) {
    const formData = mapToFormData(data);
    return this.httpClient.post(router.create, formData);
  }

  updateCustomer(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.putFormData(router.update, formData);
  }

  removeCustomer(filter?: { customerId: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete, params);
  }

  loadSourceFilter() {
    return this.httpClient.get(router.source);
  }

  loadTypeFilter() {
    return this.httpClient.get(router.type);
  }

  loadGroupFilter() {
    return this.httpClient.get(router.group);
  }
}
