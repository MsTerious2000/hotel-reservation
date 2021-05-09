import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient: HttpClient) { }

  getFeedbacks() {
    return this.httpClient.get('http://localhost:2000/api/feedbacks');
  }

  addFeedback(data: any) {
    return this.httpClient.post('http://localhost:2000/api/feedback/add', data);
  }

  deleteFeedback(id: any) {
    return this.httpClient.delete('http://localhost:2000/api/feedback/' + id);
  }
}
