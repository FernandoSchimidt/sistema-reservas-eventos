import { Component } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-my-events',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './my-events.component.html',
  styleUrl: './my-events.component.scss',
})
export class MyEventsComponent {
  events: Event[] = [];

  constructor(private eventService: EventService) {
    this.findAllEventsByUser();
  }

  findAllEventsByUser() {
    this.eventService.findAllEventsByUser().subscribe((res) => {
      this.events = res;
    });
  }

  delete(id: number) {
    this.eventService.delete(id).subscribe((res) => {
      this.findAllEventsByUser();
    });
  }
}
