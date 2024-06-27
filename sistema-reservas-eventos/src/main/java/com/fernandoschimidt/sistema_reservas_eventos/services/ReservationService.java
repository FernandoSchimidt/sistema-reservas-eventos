package com.fernandoschimidt.sistema_reservas_eventos.services;

import com.fernandoschimidt.sistema_reservas_eventos.entity.Event;
import com.fernandoschimidt.sistema_reservas_eventos.entity.Reservation;
import com.fernandoschimidt.sistema_reservas_eventos.entity.User;
import com.fernandoschimidt.sistema_reservas_eventos.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private EventService eventService;

    public Reservation reserveEvent(User user, Long eventId) throws Exception {
        Event event = eventService.findEventById(eventId).orElseThrow(() -> new Exception("Event not found"));
        if (event.getReservedSeats() >= event.getCapacity()) {
            throw new Exception("Event is fully booked");
        }
        event.setReservedSeats(event.getReservedSeats() + 1);
        Reservation reservation = new Reservation();
        reservation.setUser(user);
        reservation.setEvent(event);
        reservation.setReservationDate(LocalDateTime.now());
        return reservationRepository.save(reservation);
    }




    public List<Reservation> findAllReservationsByEvent(Long eventId) {
        List<Reservation> reservations = reservationRepository.findByEventId(eventId);
        return  reservations;
    }
}