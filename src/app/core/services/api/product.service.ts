import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, fmt } from '../../helpers/helpers';

const router = {
  get_all: `/api/products/all`,
  get_all_page: `/api/products/page`,
  create: `/api/products/create`,
  update: `/api/products/update`,
  delete: `/api/products/delete/{productId}`
};

@Injectable()
export class ProductService {
  constructor(private httpClient: ApiService) {}

  loadAllProduct() {
    return this.httpClient.get(router.get_all);
  }

  loadProductPaged(filter?: { pagesize: number; pagenumber: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_all_page, params);
  }

  createProduct(data: any) {
    return this.httpClient.post(router.create, data);
  }

  updateProduct(
    filter?: {
      productId: any;
    },
    data?: any
  ) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.put(router.update, data, params);
  }

  removeProduct(productId: any) {
    const uri = fmt(router.update, { productId });
    return this.httpClient.delete(uri);
  }
}
