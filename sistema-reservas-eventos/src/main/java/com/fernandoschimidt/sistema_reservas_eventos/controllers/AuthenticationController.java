package com.fernandoschimidt.sistema_reservas_eventos.controllers;


import com.fernandoschimidt.sistema_reservas_eventos.dtos.LoginResponse;
import com.fernandoschimidt.sistema_reservas_eventos.dtos.LoginUserDto;
import com.fernandoschimidt.sistema_reservas_eventos.dtos.RegisterUserDto;
import com.fernandoschimidt.sistema_reservas_eventos.entity.User;
import com.fernandoschimidt.sistema_reservas_eventos.services.AuthenticationService;
import com.fernandoschimidt.sistema_reservas_eventos.services.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {
    private final JwtService jwtService;

    private final AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto) {
        User registeredUser = authenticationService.signup(registerUserDto);

        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = authenticationService.authenticate(loginUserDto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setToken(jwtToken);
        loginResponse.setExpiresIn(5);

        return ResponseEntity.ok(loginResponse);
    }
}