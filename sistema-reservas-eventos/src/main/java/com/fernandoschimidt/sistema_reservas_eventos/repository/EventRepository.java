package com.fernandoschimidt.sistema_reservas_eventos.repository;

import com.fernandoschimidt.sistema_reservas_eventos.entity.Event;
import com.fernandoschimidt.sistema_reservas_eventos.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findAllByUser(User currentUser);
}
