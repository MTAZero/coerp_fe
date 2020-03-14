import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  get_template: `/api/sms-templates/page-search`,
  create_template: `/api/sms-templates/create`,
  update_template: `/api/sms-templates/update`,
  delete_template: `/api/sms-templates/delete`,
  get_strategy: `/api/sms-strategys/page-search`,
  create_strategy: `/api/sms-strategys/create`,
  update_strategy: `/api/sms-strategys/update`,
  delete_strategy: `/api/sms-strategys/delete`,
  get_field: '/api/sms-templates/get_all_fields'
};

@Injectable()
export class SmsService {
  constructor(private httpClient: ApiService) {}

  loadSmsTemplate(filter?: { pageNumber: any; pageSize: any; search_name: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_template, params);
  }

  createSmsTemplate(data: any) {
    const formData = mapToFormData(data);
    return this.httpClient.post(router.create_template, formData);
  }

  updateSmsTemplate(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.putFormData(router.update_template, formData);
  }

  removeSmsTemplate(filter?: { sms_templateId: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete_template, params);
  }

  loadSmsStrategy(filter?: { pageNumber: any; pageSize: any; search_name: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_strategy, params);
  }

  createSmsStrategy(data: any) {
    return this.httpClient.post(router.create_strategy, data);
  }

  updateSmsStrategy(data: any) {
    return this.httpClient.post(router.update_strategy, data);
  }

  removeSmsStrategy(filter?: { sms_strategyId: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete_strategy, params);
  }

  loadField(filter?: { pageNumber: any; pageSize: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_field, params);
  }
}
