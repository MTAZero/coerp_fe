import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  search: `/api/products/search`,
  info: `/api/products/get_by_id`,
  create: `/api/products/create`,
  update: `/api/products/update`,
  delete: `/api/products/delete`,
  category: `/api/products/get_category`,
  supplier: `/api/products/get_supplier`,
  unit: `/api/products/unit`,
  update_image: '/api/products/update_image',
  export: '/api/product/export',
  import: '/api/product/import',
  export_template: '/api/product/export_template',
};

@Injectable()
export class ProductService {
  constructor(private httpClient: ApiService) {}

  searchProduct(filter?: {
    pageNumber: any;
    pageSize: any;
    search_name: any;
    category_id: any;
    start_date: any;
    end_date: any;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.search, params);
  }

  exportProduct(filter?: {
    pageNumber: any;
    pageSize: any;
    search_name: any;
    category_id: any;
    start_date: any;
    end_date: any;
  }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.export, params);
  }

  exportTemplate() {
    return this.httpClient.get(router.export_template);
  }

  loadProductInfo(filter?: { pu_id: any }) {
    const params = mapToHttpParamsQuery(filter);
    return this.httpClient.get(router.info, params);
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

  updateImage(file: any, pu_id: any) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('pu_id', pu_id);
    return this.httpClient.putFormData(router.update_image, formData);
  }

  importProduct(file: any) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.postFormData(router.import, formData);
  }
}
