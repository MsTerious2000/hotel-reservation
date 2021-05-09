import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestService } from '../services/guest.service';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  data: any;
  id: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private guestService: GuestService, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  register() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      alert('REGISTRATION FAILED! PLEASE ENTER THE REQUIRED FIELDS!');
    } else {
      this.guestService.register(this.registerForm.value).subscribe(res => {
        this.data = res;
        const welcomeGuest = this.registerForm.get('firstName')?.value;
        alert('Welcome to Casa de Quirrejacino ' + welcomeGuest + '!');
        this.router.navigateByUrl('guest/reservation');
      });
    }
  }

  cancel() {
    this.router.navigateByUrl('login');
  }

}
