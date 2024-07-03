import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventFormComponent } from './components/events/event-form/event-form.component';
import { MyEventsComponent } from './components/events/my-events/my-events.component';
import { EventDetailsComponent } from './components/events/event-details/event-details.component';
import { ReservationsComponent } from './components/events/reservations/reservations.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events', component: EventListComponent },
  { path: 'my-events', component: MyEventsComponent },
  { path: 'events-form', component: EventFormComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'reservations', component: ReservationsComponent },
];
