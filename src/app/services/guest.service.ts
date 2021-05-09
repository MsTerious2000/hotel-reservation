import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private httpClient: HttpClient) { }

  getGuest() {
    return this.httpClient.get(environment.apiUrl + '/guests');
  }

  getGuestById(id: any) {
    return this.httpClient.get(environment.apiUrl + '/guest/' + id);
  }
  
  updateData(id: any, data: any) {
    return this.httpClient.put(environment.apiUrl + '/guest/update/' + id, data);
  }

  register(data: any) {
    return this.httpClient.post(environment.apiUrl + '/guest/add', data);
  }

  deleteData(id: any) {
    return this.httpClient.delete(environment.apiUrl + '/guest/' + id);
  }
}
