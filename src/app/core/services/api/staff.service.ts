import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, fmt, mapToFormData } from '../../helpers/helpers';

const router = {
  search: '/api/staff/search',
  info: '/api/staff/get_by_id',
  create: `/api/staff/create`,
  update: `/api/staff/update`,
  delete: `/api/staff/delete`,
  export: '/api/staff/export',
  export_template: '/api/staff/export_template',
  mail_create: '/api/staffs/sendmail_created',
  role: '/api/group-role/getall',
  position: '/api/position/getall',
  department: '/api/department/getall',
  search_training: '/api/training/search',
  update_training: '/api/training/update',
  remove_training: '/api/training/delete',
  upload_attachment: '/api/attachment/update_file',
  load_bank_category: '/api/bank_category/getall',
  load_bank: '/api/bank/getall',
  load_bank_branch: '/api/bank_branch/getall',
  get: '/api/staff/getall',
  // pending
  create_location: `/api/undertakenLocations/create`,
  update_location: `/api/undertakenLocations/update`,
  delete_location: `/api/undertakenLocations/delete`,
  import: '/api/satffs/import',
  update_avatar: '/api/staffs/update_avatar',
  update_curator: '/api/staff/update-curator',
};

@Injectable()
export class StaffService {
  constructor(private httpClient: ApiService) {}

  loadStaffInfo(filter?: { id: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.info, params);
  }

  searchStaff(filter?: {
    pageNumber: number;
    pageSize: number;
    status: string;
    sta_working_status: string;
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
    sta_working_status: string;
    name: string;
    start_date: any;
    end_date: any;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.export, params);
  }

  exportTemplate() {
    return this.httpClient.get(router.export_template);
  }

  createStaff(data: any) {
    return this.httpClient.post(router.create, data);
  }

  updateStaff(data?: any) {
    return this.httpClient.putFormData(router.update, data);
  }

  removeStaff(filter?: { staffId: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete, params);
  }

  sendMailCreate(filter?: { sta_username: any; sta_email: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.post(router.mail_create, null, params);
  }

  loadGroupRole() {
    return this.httpClient.get(router.role);
  }

  loadPosition() {
    return this.httpClient.get(router.position);
  }

  loadDepartment() {
    return this.httpClient.get(router.department);
  }

  searchTraining(filter?: { pageNumber: number; pageSize: number; search_name: string }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.search_training, params);
  }

  updateTraining(data?: any) {
    const form = mapToFormData(data);
    return this.httpClient.putFormData(router.update_training, form);
  }

  removeTraining(filter?: { tn_id: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.remove_training, params);
  }

  uploadAttachment(file: any) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.putFormData(router.upload_attachment, formData);
  }

  loadBankCategory() {
    return this.httpClient.get(router.load_bank_category);
  }

  loadBank(filter?: { bank_category_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.load_bank, params);
  }

  loadBankBranch(filter?: { bank_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.load_bank_branch, params);
  }
  //=============================pending============================================
  loadAllStaff() {
    return this.httpClient.get(router.get);
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

  updateCurator(data?: any) {
    return this.httpClient.putFormData(router.update_curator, data);
  }
}
