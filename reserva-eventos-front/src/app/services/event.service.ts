import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly urlBase = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) {}

  findAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.urlBase);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.urlBase, event);
  }
  findAllEventsByUser(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.urlBase}/me`);
  }

  findEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.urlBase}/${id}`);
  }
  delete(id: number): Observable<Event> {
    return this.http.delete<Event>(`${this.urlBase}/${id}`);
  }
}
