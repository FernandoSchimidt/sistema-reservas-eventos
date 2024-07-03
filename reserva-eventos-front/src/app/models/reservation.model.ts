import { Event } from './event.model';
import { User } from './user.model';

export interface Reservation {
  id: number;
  user: User;
  event: Event;
}
