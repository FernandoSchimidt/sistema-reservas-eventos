package com.fernandoschimidt.sistema_reservas_eventos.repository;

import com.fernandoschimidt.sistema_reservas_eventos.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
}