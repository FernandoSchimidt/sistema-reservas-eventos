package com.fernandoschimidt.sistema_reservas_eventos.controllers;

import com.fernandoschimidt.sistema_reservas_eventos.entity.Event;
import com.fernandoschimidt.sistema_reservas_eventos.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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


}