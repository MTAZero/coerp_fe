import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  get_all_page: `/api/products/search`,
  get_by_id: `/api/products/infor`,
  create: `/api/products/create`,
  update: `/api/products/update`,
  delete: `/api/products/delete`,
  category: `/api/product-categorys/get-name`,
  supplier: `/api/suppliers/get-name`,
  unit: `/api/products/unit`
};

@Injectable()
export class ProductService {
  constructor(private httpClient: ApiService) {}

  loadProduct(filter?: { pageNumber: any; pageSize: any; search_name: any; category_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_all_page, params);
  }

  loadProductById(filter?: { pu_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.get_by_id, params);
  }

  createProduct(data: any) {
    const formData = mapToFormData(data);
    return this.httpClient.post(router.create, formData);
  }

  updateProduct(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.putFormData(router.update, formData);
  }

  removeProduct(filter?: { productId: number }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.delete(router.delete, params);
  }

  loadCategory() {
    return this.httpClient.get(router.category);
  }

  loadSupplier() {
    return this.httpClient.get(router.supplier);
  }

  loadUnit() {
    return this.httpClient.get(router.unit);
  }
}
