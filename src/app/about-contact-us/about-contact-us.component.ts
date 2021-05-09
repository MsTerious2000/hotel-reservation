import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-about-contact-us',
  templateUrl: './about-contact-us.component.html',
  styleUrls: ['./about-contact-us.component.css']
})
export class AboutContactUsComponent implements OnInit {
  feedbackForm!: FormGroup;
  submitted = false;
  data: any;

  constructor(private formbuilder: FormBuilder, private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.feedbackForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      feedback: ['', Validators.required],
    });
  }

  get f() {
    return this.feedbackForm.controls;
  }

  submit() {
    this.submitted = true;

    if(this.feedbackForm.invalid) {
      alert('SUBMISSION FAILED! CHECK YOUR EMAIL!');
      return;
    } else {
      this.feedbackService.addFeedback(this.feedbackForm.value).subscribe(res => {
        alert('FEEDBACK SENT!\nWE WILL IMPROVE THE HOTEL RESERVATION BY YOUR CONCERNS!\nTHANK YOU!');
        this.data = res;
        location.reload();
      });
    }
  }

}

