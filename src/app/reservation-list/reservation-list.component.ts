import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: any;
  data: any;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservationData().subscribe(res => {
      this.reservations = res;
    });
  }

  delete(id: any) {
    if (confirm('CONFIRM DELETE?')) {
      this.reservationService.deleteData(id).subscribe(res => {
        this.data = res;
        alert('DELETED SUCCESSFULY!');
        location.reload();
      });
    } else {
      return;
    }
  }

}
