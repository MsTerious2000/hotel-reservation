import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
  feedbacks: any;
  data: any;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe(res => {
      this.feedbacks = res;
    });
  }

  reply() {
    const asdf = Object.values(this.feedbacks[1]);
    if (prompt("Enter Your Reply...")) {
      alert('Reply Sent! (ftc)');
      location.reload();
    } else {
      alert('REPLY NOT SENT!');
    }
  }

  delete(id: any) {
    if (confirm('CONFIRM DELETE?')) {
      this.feedbackService.deleteFeedback(id).subscribe(res => {
        this.data = res;
        alert('DELETED SUCCESSFULY!');
        location.reload();
      });
    } else {
      return;
    }
  }
}
