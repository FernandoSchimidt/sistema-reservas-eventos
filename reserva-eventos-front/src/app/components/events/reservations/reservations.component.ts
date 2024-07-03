import { Component } from '@angular/core';
import { Reservation } from '../../../models/reservation.model';
import { Router, RouterLink } from '@angular/router';
import { ReservationService } from '../../../services/reservation.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
})
export class ReservationsComponent {
  reservations: Reservation[] = [];

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) {
    this.findAllReservationsByUser();
  }

  findAllReservationsByUser() {
    this.reservationService.findReservationByUser().subscribe((res) => {
      this.reservations = res;
    });
  }
}
