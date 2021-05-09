import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient: HttpClient) { }

  getFeedbacks() {
    return this.httpClient.get(environment.apiUrl + '/feedbacks');
  }

  addFeedback(data: any) {
    return this.httpClient.post(environment.apiUrl + '/feedback/add', data);
  }

  deleteFeedback(id: any) {
    return this.httpClient.delete(environment.apiUrl + '/feedback/' + id);
  }
}
