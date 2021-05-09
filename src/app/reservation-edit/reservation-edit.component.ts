import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css']
})
export class ReservationEditComponent implements OnInit {
  reservation = new Reservation();
  submitted = false;
  data: any;
  id: any;

  editReservationForm = new FormGroup({
    guestName: new FormControl('', Validators.required),
    checkin: new FormControl('', Validators.required),
    checkout: new FormControl('', Validators.required),
    roomType: new FormControl('', Validators.required)
  });

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);

    this.reservationService.getReservationById(this.id).subscribe(res => {
      this.data = res;
      this.reservation = this.data;

      this.editReservationForm = new FormGroup({
        guestName: new FormControl(this.reservation.guestName, Validators.required),
        checkin: new FormControl(this.reservation.checkin, Validators.required),
        checkout: new FormControl(this.reservation.checkout, Validators.required),
        roomType: new FormControl(this.reservation.roomType, Validators.required)
      });
    });


  }

  get f() {
    return this.editReservationForm.controls;
  }

  updateReservation() {
    this.submitted = true;

    if (this.editReservationForm.invalid) {
      alert('UPDATE FAILED! CHECK YOUR ENTERED DATA!');
      return;
    } else if (confirm('SAVE CHANGES?')) {
      this.reservationService.updateReservation(this.id, this.editReservationForm.value).subscribe(res => {
        this.data = res;
        alert('CHANGES SAVED SUCCESSFULLY!')
        this.router.navigateByUrl('admin/reservations');
      });
    } else {
      return;
    }
  }

  cancel() {
    if (confirm('DISCARD CHANGES?')) {
      this.router.navigateByUrl('admin/reservations');
    } else {
      return;
    }
  }

}
