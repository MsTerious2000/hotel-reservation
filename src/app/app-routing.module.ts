import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GuestListComponent } from './guest-list/guest-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GuestEditComponent } from './guest-edit/guest-edit.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ReservationEditComponent } from './reservation-edit/reservation-edit.component';
import { HomeComponent } from './home/home.component';
import { AboutContactUsComponent } from './about-contact-us/about-contact-us.component';
import { LoginErrorComponent } from './login-error/login-error.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'loginError', component: LoginErrorComponent },

  { path: 'guest', redirectTo: 'guest/home' },
  { path: 'guest/home', component: HomeComponent },
  { path: 'guest/reservation', component: ReservationComponent },
  { path: 'guest/about-contactUs', component: AboutContactUsComponent },

  { path: 'guest/home/home', redirectTo: 'guest/home' },
  { path: 'guest/home/reservation', redirectTo: 'guest/reservation' },
  { path: 'guest/home/about-contactUs', redirectTo: 'guest/about-contactUs' },

  { path: 'guest/reservation/home', redirectTo: 'guest/home' },
  { path: 'guest/reservation/reservation', redirectTo: 'guest/reservation' },
  { path: 'guest/reservation/about-contactUs', redirectTo: 'guest/about-contactUs' },

  { path: 'guest/about-contactUs/home', redirectTo: 'guest/home' },
  { path: 'guest/about-contactUs/reservation', redirectTo: 'guest/reservation' },
  { path: 'guest/about-contactUs/about-contactUs', redirectTo: 'guest/about-contactUs' },

  { path: 'admin', redirectTo: 'admin/guestList' },
  { path: 'admin/guestList', component: GuestListComponent },
  { path: 'admin/guestList/edit/:id', component: GuestEditComponent },
  { path: 'admin/reservations/edit/:id', component: ReservationEditComponent },
  { path: 'admin/reservations', component: ReservationListComponent },
  { path: 'admin/feedbacks', component: FeedbacksComponent },

  { path: 'admin/guestList/guestList', redirectTo: 'admin/guestList' },
  { path: 'admin/guestList/reservations', redirectTo: 'admin/reservations' },
  { path: 'admin/guestList/feedbacks', redirectTo: 'admin/feedbacks' },

  { path: 'admin/reservations/guestList', redirectTo: 'admin/guestList' },
  { path: 'admin/reservations/reservations', redirectTo: 'admin/reservations' },
  { path: 'admin/reservations/feedbacks', redirectTo: 'admin/feedbacks' },

  { path: 'admin/feedbacks/guestList', redirectTo: 'admin/guestList' },
  { path: 'admin/feedbacks/reservations', redirectTo: 'admin/reservations' },
  { path: 'admin/feedbacks/feedbacks', redirectTo: 'admin/feedbacks' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class AppRoutingModule { }

