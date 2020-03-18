import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { mapToHttpParamsQuery, mapToFormData } from '../../helpers/helpers';

const router = {
  profile: `/api/staff/profile`,
  update_profile: `/api/profile/update`
};

@Injectable()
export class ProfileService {
  constructor(private httpClient: ApiService) {}

  loadProfile() {
    return this.httpClient.get(router.profile);
  }

  updateProfile(data?: any) {
    const formData = mapToFormData(data);
    return this.httpClient.put(router.update_profile, formData);
  }
}
