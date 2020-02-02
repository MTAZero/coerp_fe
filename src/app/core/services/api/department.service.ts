import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, fmt } from '../../helpers/helpers';

const router = {
  get_all: `/api/departments/all`,
  get_all_page: `/api/departments/page`,
  create: `/api/departments/create`,
  update: `/api/departments/update`,
  delete: `/api/departments/delete/{departmentId}`
};

@Injectable()
export class DepartmentService {
  constructor(private httpClient: ApiService) {}

  loadAllDepartment() {
    return this.httpClient.get(router.get_all);
  }

  loadDepartmentPaged(filter?: { pagesize: number; pagenumber: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_all_page, params);
  }

  createDepartment(data: any) {
    return this.httpClient.post(router.create, data);
  }

  updateDepartment(
    filter?: {
      departmentId: any;
    },
    data?: any
  ) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.put(router.update, data, params);
  }

  removeDepartment(departmentId: any) {
    const uri = fmt(router.update, { departmentId });
    return this.httpClient.delete(uri);
  }
}
