import { Component } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
})
export class EventListComponent {
  events: Event[] = [];

  constructor(private eventService: EventService, private router: Router) {
    this.findAllEvents();
  }

  findAllEvents() {
    this.eventService.findAllEvents().subscribe((res) => {
      this.events = res;
    });
  }
  findAllEventsByUser() {
    this.eventService.findAllEventsByUser().subscribe((res) => {
      this.events = res;
    });
  }
  eventDetails(id: number) {
    this.router.navigate(['events/', id]);
  }
}
