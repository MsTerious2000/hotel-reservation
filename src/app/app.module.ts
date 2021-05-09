import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutContactUsComponent } from './about-contact-us/about-contact-us.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { GuestEditComponent } from './guest-edit/guest-edit.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginErrorComponent } from './login-error/login-error.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarGuestComponent } from './navbar-guest/navbar-guest.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationEditComponent } from './reservation-edit/reservation-edit.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutContactUsComponent,
    FeedbacksComponent,
    GuestEditComponent,
    GuestListComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LoginErrorComponent,
    NavbarAdminComponent,
    NavbarGuestComponent,
    RegisterComponent,
    ReservationComponent,
    ReservationEditComponent,
    ReservationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
