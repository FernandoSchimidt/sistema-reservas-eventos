package com.fernandoschimidt.sistema_reservas_eventos.repository;

import com.fernandoschimidt.sistema_reservas_eventos.entity.Event;
import com.fernandoschimidt.sistema_reservas_eventos.entity.Reservation;
import com.fernandoschimidt.sistema_reservas_eventos.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByUser(User user);
    List<Reservation> findByEvent(Event event);

    List<Reservation> findByEventId(Long eventId);
}
