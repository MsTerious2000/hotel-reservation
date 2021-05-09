import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  guests: any;
  data: any;

  constructor(private guestService: GuestService, private location: Location) { }

  ngOnInit(): void {
    this.guestService.getGuest().subscribe(res => {
      console.log(res);
      this.guests = res;
    });
  }

  delete(id: any) {
    if (confirm('CONFIRM DELETE?')) {
      this.guestService.deleteData(id).subscribe(res => {
        this.data = res;
        alert('DELETED SUCCESSFULY!');
        location.reload();
      });
    } else {
      return;
    }
  }

}
