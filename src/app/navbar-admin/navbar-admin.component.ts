import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    if (confirm('LOGOUT AS ADMIN?')) {
      alert('LOGOUT SUCCESSFUL!')
      this.router.navigateByUrl('login');
    } else {
      return;
    }
  }

}
