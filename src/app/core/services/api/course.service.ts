import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  get: '/api/training/getall',
  search: '/api/training/search',
  create: '/api/training/create',
  update: '/api/training/update',
  delete: '/api/training/delete',
  
  source: '/api/source/getall',
  group: `/api/customer_group/getall`,
  type: `/api/customer_type/getall`,
//   export: '/api/customer/export',
//   export_template: '/api/customer/export_template',
//   source: '/api/source/getall',
//   group: `/api/customer_group/getall`,
//   type: `/api/customer_type/getall`,
//   // pending
//   get_by_curator: '/api/customer/search_by_curator',
//   create_location: `/api/ship-addresss/create`,
//   update_location: `/api/ship-addresss/update`,
//   delete_location: `/api/ship-addresss/delete`,
//   import: `/api/customer/import`,
//   update_avatar: '/api/customers/update_avatar',
};

@Injectable()
export class CourseService {
  constructor(private httpClient: ApiService) {}

  loadTrainingInfo(filter?: { tn_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get, params);
  }

  searchTraining(filter?: {
    pageNumber: number;
    pageSize: number;
    search_name: string;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.search, params);
  }

//   exportCustomer(filter?: {
//     pageNumber: any;
//     pageSize: any;
//     search_name: any;
//   }) {
//     const params = mapToHttpParamsQuery(filter);
//     return this.httpClient.get(router.export, params);
//   }

//   exportTemplate() {
//     return this.httpClient.get(router.export_template);
//   }
  loadTraining(filter?: { tn_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get, params);
  }
  createTraining(data: any) {
    return this.httpClient.post(router.create, data);
  }

  updateTraining(data?: any) {
    return this.httpClient.putFormData(router.update, data);
  }

  removeTraining(filter?: { tn_id: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete, params);
  }
  loadSource() {
    return this.httpClient.get(router.source);
  }

  loadGroup() {
    return this.httpClient.get(router.group);
  }

  loadType() {
    return this.httpClient.get(router.type);
  }
//   loadCourseByCurator(filter?: {
//     pageNumber: any;
//     pageSize: any;
//     search_name: any;
//     cu_curator_id: any;
//   }) {
//     const params = mapToHttpParamsQuery(filter);
//     return this.httpClient.get(router.get_by_curator, params);
//   }

//   loadSource() {
//     return this.httpClient.get(router.source);
//   }

//   loadGroup() {
//     return this.httpClient.get(router.group);
//   }

//   loadType() {
//     return this.httpClient.get(router.type);
//   }

//   createShipAddress(data: any) {
//     const formData = mapToFormData(data);
//     return this.httpClient.post(router.create_location, formData);
//   }

//   updateShipAddress(data?: any) {
//     const formData = mapToFormData(data);
//     return this.httpClient.putFormData(router.update_location, formData);
//   }

//   removeShipAddress(filter?: { shipaddressId: number }) {
//     const params = mapToHttpParamsQuery(filter);
//     return this.httpClient.delete(router.delete_location, params);
//   }

//   importCustomer(file: any) {
//     const formData = new FormData();
//     formData.append('file', file, file.name);
//     return this.httpClient.postFormData(router.import, formData);
//   }

//   updateAvatar(file: any, cu_id: any) {
//     const formData = new FormData();
//     formData.append('file', file, file.name);
//     formData.append('cu_id', cu_id);
//     return this.httpClient.putFormData(router.update_avatar, formData);
//   }
}
