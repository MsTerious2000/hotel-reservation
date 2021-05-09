import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-guest',
  templateUrl: './navbar-guest.component.html',
  styleUrls: ['./navbar-guest.component.css']
})
export class NavbarGuestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home() {

  }

  reservation() {

  }

  about_contactUs() {
    this.router.navigateByUrl('guest/about-contactUs');
  }

  logout() {
    if (confirm('CONFIRM LOGOUT?')) {
      alert('LOGOUT SUCCESSFUL!')
      this.router.navigateByUrl('login');
    } else {
      return;
    }
  }
  
}
