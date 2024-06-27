package com.fernandoschimidt.sistema_reservas_eventos.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterUserDto {
    private String email;

    private String password;

    private String firstname;
    private String lastname;
    private String username;

}