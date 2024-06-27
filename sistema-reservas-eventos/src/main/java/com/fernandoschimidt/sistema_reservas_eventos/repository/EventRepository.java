package com.fernandoschimidt.sistema_reservas_eventos.repository;

import com.fernandoschimidt.sistema_reservas_eventos.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
