import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  revenue: `/api/dashboards/statistics-revenue`,
  order: `/api/dashboards/statistics-order`,
  customer: '/api/dashboard/statistic-customer-group',
  rate: '/api/dashboard/statistic-transaction-rate'
};

@Injectable()
export class StatisticService {
  constructor(private httpClient: ApiService) {}

  loadRevenue() {
    return this.httpClient.get(router.revenue);
  }

  loadCustomer() {
    return this.httpClient.get(router.customer);
  }

  loadRate() {
    return this.httpClient.get(router.rate);
  }

  loadOrder(filter?: {
    pageNumber: any;
    pageSize: any;
    month: any;
    week: any;
    day: any;
    search_name: any;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.order, params);
  }
}
