import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private httpClient: HttpClient) { }

  getGuest() {
    return this.httpClient.get('http://localhost:2000/api/guests');
  }

  getGuestById(id: any) {
    return this.httpClient.get('http://localhost:2000/api/guest/' + id);
  }
  
  updateData(id: any, data: any) {
    return this.httpClient.put('http://localhost:2000/api/guest/update/' + id, data);
  }

  register(data: any) {
    return this.httpClient.post('http://localhost:2000/api/guest/add', data);
  }

  deleteData(id: any) {
    return this.httpClient.delete('http://localhost:2000/api/guest/' + id);
  }
}
