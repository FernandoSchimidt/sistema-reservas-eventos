import { Component } from '@angular/core';
import { Event } from '../../../models/event.model';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { ReservationService } from '../../../services/reservation.service';
import { Reservation } from '../../../models/reservation.model';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss',
})
export class EventDetailsComponent {
  event!: Event;
  reservations: Reservation[] = [];

  constructor(
    private eventService: EventService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private reservationService: ReservationService
  ) {
    const id = this.activeRouter.snapshot.params['id'];
    this.findEventById(id);
    this.findAllReservations(id);
  }

  findEventById(id: number) {
    this.eventService.findEventById(id).subscribe((res) => {
      this.event = res;
    });
  }

  findAllReservations(id: number) {
    this.reservationService.findReservationByEvents(id).subscribe((res) => {
      this.reservations = res;
      console.log(this.reservations)
    });
  }
  matricular(eventId:number) {
    this.reservationService.reservation(eventId).subscribe((res)=>{

    })
  }
}
