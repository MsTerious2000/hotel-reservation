import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestService } from '../services/guest.service';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from 'src/app/models/reservation.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservation = new Reservation();
  reservationForm!: FormGroup;
  submitted = false;
  data: any;
  id: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private reservationService: ReservationService, private guestService: GuestService) { }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      guestName: ['', Validators.required],
      checkin: ['', Validators.required],
      checkout: ['', Validators.required],
      roomType: ['', Validators.required]
    });
  }

  get f() {
    return this.reservationForm.controls;
  }

  reserve() {
    this.submitted = true;

    if (this.reservationForm.invalid) {
      alert('RESERVATION FAILED! PLEASE ENTER THE REQUIRED FIELDS!');
    } else {
      this.reservationService.reserve(this.reservationForm.value).subscribe(res => {
        alert('RESERVATION SUCCESSFUL!');
        this.data = res;
        this.router.navigateByUrl('/guest/home');
      });
    }
  }

  cancel() {
    this.router.navigateByUrl('guest/home');
  }

}
