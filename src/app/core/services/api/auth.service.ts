import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  change: `/api/staffs/ChangePassword`,
  forgot: `/api/authentication/forgotpassword`
};

@Injectable()
export class AuthService {
  constructor(private httpClient: ApiService) {}

  changePassword(
    filter?: { id: any },
    body?: { OldPassword: any; NewPassword: any; ConfirmPassword: any }
  ) {
    const params = mapToHttpParamsQuery(filter);
    const formData = mapToFormData(body);
    return this.httpClient.put(router.change, formData, params);
  }
}
