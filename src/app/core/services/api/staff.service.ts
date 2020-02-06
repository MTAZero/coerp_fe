import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, fmt } from '../../helpers/helpers';

const router = {
  get_all: `/api/staffs/all`,
  get_all_page: `/api/staffs/page`,
  create: `/api/staffs/create`,
  update: `/api/staffs/update`,
  delete: `/api/staffs/delete/{sta_id}`,
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

  createStaff(data: any) {
    return this.httpClient.post(router.create, data);
  }

  updateStaff(
    filter?: {
      sta_id: any;
    },
    data?: any
  ) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.put(router.update, data, params);
  }

  removeStaff(staffId: any) {
    const uri = fmt(router.update, { staffId });
    return this.httpClient.delete(uri);
  }
}
