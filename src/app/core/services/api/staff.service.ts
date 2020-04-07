import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, fmt, mapToFormData } from '../../helpers/helpers';

const router = {
  load_all: '/api/staffs/all',
  search: '/api/staffs/search-active-name',
  info: '/api/staffs/infor',
  create: `/api/staffs/create`,
  update: `/api/staffs/update`,
  delete: `/api/staffs/delete`,
  create_location: `/api/undertakenLocations/create`,
  update_location: `/api/undertakenLocations/update`,
  delete_location: `/api/undertakenLocations/delete`,
  role: '/api/group-roles/all',
  import: '/api/satffs/import',
  export: '/api/satffs/export',
  update_avatar: '/api/staffs/update_avatar',
  mail_create: '/api/staffs/sendmail_created',
  update_curator: '/api/staff/update-curator',
};

@Injectable()
export class StaffService {
  constructor(private httpClient: ApiService) {}

  loadAllStaff() {
    return this.httpClient.get(router.load_all);
  }

  loadStaffInfo(filter?: { id: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.info, params);
  }

  searchStaff(filter?: {
    pageNumber: number;
    pageSize: number;
    status: string;
    name: string;
    start_date: any;
    end_date: any;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.search, params);
  }

  exportStaff(filter?: {
    pageNumber: number;
    pageSize: number;
    status: string;
    name: string;
    start_date: any;
    end_date: any;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.export, params);
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

  loadGroupRole() {
    return this.httpClient.get(router.role);
  }

  importStaff(file: any) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.postFormData(router.import, formData);
  }

  updateAvatar(file: any) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.putFormData(router.update_avatar, formData);
  }

  sendMailCreate(filter?: { sta_username: any; sta_email: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.post(router.mail_create, null, params);
  }

  updateCurator(data?: any) {
    return this.httpClient.putFormData(router.update_curator, data);
  }
}
