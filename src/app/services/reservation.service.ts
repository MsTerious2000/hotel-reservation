import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }

  getReservationData() {
    return this.httpClient.get(environment.apiUrl + '/reservations');
  }

  getReservationById(id: any) {
    return this.httpClient.get(environment.apiUrl + '/reservation/' + id);
  }

  updateReservation(id: any, data: any) {
    return this.httpClient.put(environment.apiUrl + '/reservation/update/' + id, data);
  }

  reserveName(data: any) {
    return this.httpClient.post(environment.apiUrl + '/reservation/addName', data);
  }

  reserve(data: any) {
    return this.httpClient.post(environment.apiUrl + '/reservation/add', data);
  }

  deleteData(id: any) {
    return this.httpClient.delete(environment.apiUrl + '/reservation/' + id);
  }
}
