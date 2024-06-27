package com.fernandoschimidt.sistema_reservas_eventos.controllers;

import com.fernandoschimidt.sistema_reservas_eventos.entity.Reservation;
import com.fernandoschimidt.sistema_reservas_eventos.entity.User;
import com.fernandoschimidt.sistema_reservas_eventos.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @PostMapping("/{eventId}")
    public ResponseEntity<Reservation> reserveEvent(@PathVariable Long eventId, @RequestBody User user) {
        try {
            Reservation reservation = reservationService.reserveEvent(user, eventId);
            if (reservation != null) {
                return ResponseEntity.status(HttpStatus.CREATED).body(reservation);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

@GetMapping("/{eventId}")
    public ResponseEntity<List<Reservation>> getAllReservationById(@PathVariable Long eventId){
        List<Reservation> reservations = reservationService.findAllReservationsByEvent(eventId);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(reservations);
}

}