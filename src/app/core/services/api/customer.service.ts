import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  get_all_page: `/api/customers/search`,
  get_by_id: '/api/customers/infor',
  create: `/api/customers/create`,
  update: `/api/customers/update`,
  delete: `/api/customers/delete`,
  source: `/api/sources/all`,
  type: `/api/customers/type`,
  group: `/api/customer-groups/all`,
  create_location: `/api/ship-addresss/create`,
  update_location: `/api/ship-addresss/update`,
  delete_location: `/api/ship-addresss/delete`,
  import: `/api/customer/import`,
  update_avatar: '/api/customers/update_avatar'
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

  loadCustomerById(filter?: { cu_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_by_id, params);
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

  createShipAddress(data: any) {
    const formData = mapToFormData(data);
    return this.httpClient.post(router.create_location, formData);
  }

  updateShipAddress(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.putFormData(router.update_location, formData);
  }

  removeShipAddress(filter?: { shipaddressId: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete_location, params);
  }

  importCustomer(file: any) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.postFormData(router.import, formData);
  }

  updateAvatar(file: any, cu_id: any) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('cu_id', cu_id);
    return this.httpClient.putFormData(router.update_avatar, formData);
  }
}
