import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }

  getReservationData() {
    return this.httpClient.get('http://localhost:2000/api/reservations');
  }

  getReservationById(id: any) {
    return this.httpClient.get('http://localhost:2000/api/reservation/' + id);
  }

  updateReservation(id: any, data: any) {
    return this.httpClient.put('http://localhost:2000/api/reservation/update/' + id, data);
  }

  reserveName(data: any) {
    return this.httpClient.post('http://localhost:2000/api/reservation/addName', data);
  }

  reserve(data: any) {
    return this.httpClient.post('http://localhost:2000/api/reservation/add', data);
  }

  deleteData(id: any) {
    return this.httpClient.delete('http://localhost:2000/api/reservation/' + id);
  }
}
