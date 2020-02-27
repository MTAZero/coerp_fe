import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  province: `/api/addresss/get-province`,
  district: `/api/addresss/get-district`,
  ward: `/api/addresss/get-ward`,
  create: `/api/addresss/create`,
  update: `/api/addresss/update`,
  delete: `/api/addresss/delete`
};

@Injectable()
export class AddressService {
  constructor(private httpClient: ApiService) {}

  loadProvince() {
    return this.httpClient.get(router.province);
  }

  loadDistrict(filter?: { province_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.district, params);
  }

  loadWard(filter?: { district_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.ward, params);
  }

  createAddress(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.post(router.create, formData);
  }

  updateAddress(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.putFormData(router.update, formData);
  }

  removeAddress(filter?: { addressId: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete, params);
  }
}
