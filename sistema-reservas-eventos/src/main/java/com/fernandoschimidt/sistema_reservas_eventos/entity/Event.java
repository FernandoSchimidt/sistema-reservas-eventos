package com.fernandoschimidt.sistema_reservas_eventos.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private LocalDateTime date;
    private String location;
    private int capacity;
    private int reservedSeats = 0;
    @ManyToOne
    @ToString.Exclude
    private User user;
}