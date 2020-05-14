import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  search_company: `/api/company/search`,
  info_company: `/api/company/get_by_id`,
  get_company: '/api/company/get_all',
  create_company: `/api/company/create`,
  update_company: `/api/company/update`,
  delete_company: `/api/company/delete`,
  search_package: `/api/package/search`,
  info_package: `/api/package/get_by_id`,
  get_package: '/api/package/get_all',
  create_package: `/api/package/create`,
  update_package: `/api/package/update`,
  delete_package: `/api/package/delete`,
};

@Injectable()
export class PermissionService {
  constructor(private httpClient: ApiService) {}

  searchCompany(filter?: { pageNumber: any; pageSize: any; search_name: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.search_company, params);
  }

  loadCompanyInfo(filter?: { co_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.info_company, params);
  }

  loadAllCompany() {
    return this.httpClient.get(router.get_company);
  }

  createCompany(data: any) {
    return this.httpClient.post(router.create_company, data);
  }

  updateCompany(data?: any) {
    return this.httpClient.putFormData(router.update_company, data);
  }

  removeCompany(filter?: { co_id: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete_company, params);
  }

  searchPackage(filter?: { pageNumber: any; pageSize: any; search_name: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.search_package, params);
  }

  loadPackageInfo(filter?: { pac_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.info_package, params);
  }

  loadAllPackage() {
    return this.httpClient.get(router.get_package);
  }

  createPackage(data: any) {
    return this.httpClient.post(router.create_package, data);
  }

  updatePackage(data?: any) {
    return this.httpClient.putFormData(router.update_package, data);
  }

  removePackage(filter?: { pac_id: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete_package, params);
  }
}
