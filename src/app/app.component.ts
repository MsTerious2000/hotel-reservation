import { PlatformLocation } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private platformLocation: PlatformLocation, private router: Router) {
    platformLocation.onPopState(() => {
      console.warn('BACK BUTTON IS DISABLED!');
      history.forward();
    })
  }
  
}
