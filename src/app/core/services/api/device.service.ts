import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  get_dropdown: '/api/device/get_all',
  get_by_id: '/api/device/get_by_id',
  get_search: '/api/device/search',
  update: '/api/device/update',
  delete: '/api/device/delete',
  create: '/api/device/create',
  get_unit: '/api/device/get_unit',
};

@Injectable()
export class DeviceService {
  constructor(private httpClient: ApiService) {}

  loadAllDevice() {
    return this.httpClient.get(router.get_dropdown);
  }
  searchDevice(filter?: {
    pageNumber: number;
    pageSize: number;
    search_name: string;
    start_date: any;
    end_date: any;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_search, params);
  }

  // loadAllDevice(filter?: { dev_id: any }) {
  //   const params = mapToHttpParamsQuery(filter);
  //   return this.httpClient.get(router.get_dropdown, params);
  // }
  loadDevice(filter?: { dev_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_by_id, params);
  }
  createDevice(data: any) {
    
    return this.httpClient.post(router.create, data);
  }

  updateDevice(data?: any) {
    // const formData = mapToFormData(data);
    return this.httpClient.putFormData(router.update, data);
  }

  removeDevice(filter?: { dev_id: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete, params);
  }
  loadUnit() {
    return this.httpClient.get(router.get_unit);
  }
//   loadSource() {
//     return this.httpClient.get(router.source);
//   }

//   loadGroup() {
//     return this.httpClient.get(router.group);
//   }

//   loadType() {
//     return this.httpClient.get(router.type);
//   }

}
