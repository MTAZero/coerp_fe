import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  private httpHeaders = new HttpHeaders();
  private httpOptions = {};
  private apiUrl = 'http://27.72.147.222:1230';
  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      })
    };
    this.httpHeaders = new HttpHeaders(this.httpOptions);
  }

  // api get method
  get(uri: string, params?: HttpParams) {
    return this.httpClient
      .get(this.apiUrl + uri, { headers: this.httpHeaders, params })
      .pipe(map(this.extractData));
  }

  // api post method
  post(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient
      .post(this.apiUrl + uri, data, {
        headers: this.httpHeaders,
        params
      })
      .pipe(map(this.extractData));
  }

  // api post method form-data
  postFormData(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient.post(this.apiUrl + uri, data, { params }).pipe(map(this.extractData));
  }

  // api put method
  put(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient
      .put(this.apiUrl + uri, data, {
        headers: this.httpHeaders,
        params
      })
      .pipe(map(this.extractData));
  }

  // api put method
  putFormData(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient
      .put(this.apiUrl + uri, data, {
        params
      })
      .pipe(map(this.extractData));
  }

  // put blob
  putDownloadFile(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient.put(this.apiUrl + uri, data, {
      headers: this.httpHeaders,
      responseType: 'blob' as 'json',
      params
    });
  }

  // api delete method
  delete(uri: string, params?: HttpParams) {
    return this.httpClient
      .delete(this.apiUrl + uri, {
        headers: this.httpHeaders,
        params
      })
      .pipe(map(this.extractData));
  }

  private extractData(res: HttpResponse<object>) {
    const body = res;
    return body || {};
  }
}
