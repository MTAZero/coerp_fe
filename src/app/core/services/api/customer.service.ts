import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, fmt } from '../../helpers/helpers';

const router = {
  get_all: `/api/customers/all`,
  get_all_page: `/api/customers/page`,
  create: `/api/customers/create`,
  update: `/api/customers/update`,
  delete: `/api/customers/delete/{customerId}`
};

@Injectable()
export class CustomerService {
  constructor(private httpClient: ApiService) {}

  loadAllCustomer() {
    return this.httpClient.get(router.get_all);
  }

  loadCustomerPaged(filter?: { pagesize: number; pagenumber: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_all_page, params);
  }

  createCustomer(data: any) {
    return this.httpClient.post(router.create, data);
  }

  updateCustomer(
    filter?: {
      customerId: any;
    },
    data?: any
  ) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.put(router.update, data, params);
  }

  removeCustomer(customerId: any) {
    const uri = fmt(router.update, { customerId });
    return this.httpClient.delete(uri);
  }
}
