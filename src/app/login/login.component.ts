import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestService } from '../services/guest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  data: any;
  id: any;
  guest: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private guestService: GuestService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;
    if (this.loginForm.get('email')?.value === '' || this.loginForm.get('email')?.invalid) {
      alert('INVALID EMAIL!');
      return;
    } else {
      this.nullPassword();
    }
  }

  nullPassword() {
    this.submitted = true;
    if (this.loginForm.get('password')?.value === '' && this.loginForm.get('confirmPassword')?.value === '' && this.loginForm.invalid) {
      alert('PASSWORD IS REQUIRED!');
    } else {
      this.passwordMatch();
    }
  }

  passwordMatch() {
    this.submitted = true;
    if (this.loginForm.get('password')?.value != this.loginForm.get('confirmPassword')?.value) {
      alert('PASSWORD DO NOT MATCH!');
      return;
    } else {
      this.guestLogin();
    }
  }

  guestLogin() {
    this.router.navigateByUrl('loginError');
  }

  loginAsAdmin() {
    if (prompt('Type "admin" to proceed...') === "admin") {
      alert('ACCESS GRANTED!');
      this.router.navigateByUrl('admin/guestList');
    } else {
      alert('ACCESS DENIED!');
      return;
    }
  }

}
