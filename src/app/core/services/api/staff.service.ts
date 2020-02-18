import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import {
  mapToHttpParamsQuery,
  fmt,
  mapToFormData
} from '../../helpers/helpers';

const router = {
  get_all: `/api/staffs/all`,
  get_all_page: `/api/staffs/page`,
  search: '/api/staffs/search-active-name',
  create: `/api/staffs/create`,
  update: `/api/staffs/update`,
  delete: `/api/staffs/delete`,
  get_staff_free: `/api/staffs/get_staff_free`
};

@Injectable()
export class StaffService {
  constructor(private httpClient: ApiService) {}

  loadAllStaff() {
    return this.httpClient.get(router.get_all);
  }

  loadStaffPaged(filter?: { pagesize: number; pagenumber: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_all_page, params);
  }

  searchStaff(filter?: {
    pageNumber: number;
    pageSize: number;
    status: string;
    name: string;
  }) {
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
}
