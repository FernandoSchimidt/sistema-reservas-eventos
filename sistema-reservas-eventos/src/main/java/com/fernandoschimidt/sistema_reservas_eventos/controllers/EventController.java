package com.fernandoschimidt.sistema_reservas_eventos.controllers;

import com.fernandoschimidt.sistema_reservas_eventos.entity.Event;
import com.fernandoschimidt.sistema_reservas_eventos.entity.User;
import com.fernandoschimidt.sistema_reservas_eventos.services.EventService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {
    @Autowired
    private EventService eventService;

    @PostMapping
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        Event savedEvent = eventService.saveEvent(event);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedEvent);
    }

    @GetMapping
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = eventService.findAllEvents();
        return ResponseEntity.ok(events);
    }

    @GetMapping("{eventId}")
    public ResponseEntity<Event> findEventById(@PathVariable(name = "eventId") Long eventId) {
        Event event = eventService.findEventById(eventId).orElseThrow(() -> new EntityNotFoundException("Event not foud"));
        return ResponseEntity.ok(event);
    }

    @GetMapping("/me")
    public ResponseEntity<List<Event>> getAllEventsByUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
        List<Event> events = eventService.findAllEventsByUser(currentUser);
        return ResponseEntity.ok(events);
    }

    @DeleteMapping("{eventId}")
    public void delete(@PathVariable(name = "eventId") Long eventId) {
        eventService.delete(eventId);
    }


}