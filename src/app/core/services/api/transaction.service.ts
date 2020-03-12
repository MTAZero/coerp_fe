import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  type: `/api/transactions/get_transaction_type`,
  priority: `/api/transactions/get_transaction_priority`,
  status: `/api/transactions/get_transaction_status`,
  search: `/api/transactions/search`,
  create: `/api/transactions/create`,
  update: `/api/transactions/update`,
  delete: `/api/transactions/delete`,
  get_customer: `/api/transaction-customers/infor`,
  export: '/api/transaction/export'
};

@Injectable()
export class TransactionService {
  constructor(private httpClient: ApiService) {}

  loadTransaction(filter?: { pageSize: number; pageNumber: number; search_name: string }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.search, params);
  }

  exportTransaction(filter?: { pageSize: number; pageNumber: number; search_name: string }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.export, params);
  }

  loadCustomer(filter?: { cu_id: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_customer, params);
  }

  loadType() {
    return this.httpClient.get(router.type);
  }

  loadPriority() {
    return this.httpClient.get(router.priority);
  }

  loadStatus() {
    return this.httpClient.get(router.status);
  }

  createTransaction(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.post(router.create, formData);
  }

  updateTransaction(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.putFormData(router.update, formData);
  }

  removeTransaction(filter?: { transactionId: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete, params);
  }
}
