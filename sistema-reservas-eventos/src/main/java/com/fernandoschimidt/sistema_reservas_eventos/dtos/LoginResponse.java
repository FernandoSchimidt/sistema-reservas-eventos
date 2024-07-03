package com.fernandoschimidt.sistema_reservas_eventos.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {
    private String token;

    private long expiresIn;
    private String username;

    public String getToken() {
        return token;
    }

}