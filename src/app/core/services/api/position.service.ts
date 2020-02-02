import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, fmt } from '../../helpers/helpers';

const router = {
  get_all: `/api/positions/all`,
  get_all_page: `/api/positions/page`,
  create: `/api/positions/create`,
  update: `/api/positions/update`,
  delete: `/api/positions/delete/{positionId}`
};

@Injectable()
export class PositionService {
  constructor(private httpClient: ApiService) {}

  loadAllPosition() {
    return this.httpClient.get(router.get_all);
  }

  loadPositionPaged(filter?: { pagesize: number; pagenumber: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_all_page, params);
  }

  createPosition(data: any) {
    return this.httpClient.post(router.create, data);
  }

  updatePosition(
    filter?: {
      positionId: any;
    },
    data?: any
  ) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.put(router.update, data, params);
  }

  removePosition(positionId: any) {
    const uri = fmt(router.update, { positionId });
    return this.httpClient.delete(uri);
  }
}
