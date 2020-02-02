import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, fmt } from '../../helpers/helpers';

const router = {
  get_all: `/api/services/all`,
  get_all_page: `/api/services/page`,
  create: `/api/services/create`,
  update: `/api/services/update`,
  delete: `/api/services/delete/{serviceId}`
};

@Injectable()
export class ServiceService {
  constructor(private httpClient: ApiService) {}

  loadAllService() {
    return this.httpClient.get(router.get_all);
  }

  loadServicePaged(filter?: { pagesize: number; pagenumber: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_all_page, params);
  }

  createService(data: any) {
    return this.httpClient.post(router.create, data);
  }

  updateService(
    filter?: {
      serviceId: any;
    },
    data?: any
  ) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.put(router.update, data, params);
  }

  removeService(serviceId: any) {
    const uri = fmt(router.update, { serviceId });
    return this.httpClient.delete(uri);
  }
}
