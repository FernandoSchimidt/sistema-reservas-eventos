import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly urlBase = 'http://localhost:8080/api/reservations';

  constructor(private http: HttpClient) {}

  findReservationByEvents(id: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.urlBase}/${id}`);
  }
  reservation(eventId: number): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.urlBase}/${eventId}`, eventId);
  }
  findReservationByUser(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.urlBase);
  }
}
