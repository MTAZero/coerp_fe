import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, fmt, mapToFormData } from '../../helpers/helpers';

const router = {
  search: '/api/staffs/search-active-name',
  info: '/api/staffs/infor',
  create: `/api/staffs/create`,
  update: `/api/staffs/update`,
  delete: `/api/staffs/delete`,
  create_location: `/api/undertakenLocations/create`,
  update_location: `/api/undertakenLocations/update`,
  delete_location: `/api/undertakenLocations/delete`
};

@Injectable()
export class StaffService {
  constructor(private httpClient: ApiService) {}

  loadStaffInfo(filter?: { id: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.info, params);
  }

  searchStaff(filter?: { pageNumber: number; pageSize: number; status: string; name: string }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.search, params);
  }

  createStaff(data: any) {
    const formData = mapToFormData(data);
    return this.httpClient.post(router.create, formData);
  }

  updateStaff(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.putFormData(router.update, formData);
  }

  removeStaff(filter?: { staffId: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete, params);
  }

  createUndertakenLocation(data: any) {
    const formData = mapToFormData(data);
    return this.httpClient.post(router.create_location, formData);
  }

  updateUndertakenLocation(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.putFormData(router.update_location, formData);
  }

  removeUndertakenLocation(filter?: { undertakenlocationId: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete_location, params);
  }
}
