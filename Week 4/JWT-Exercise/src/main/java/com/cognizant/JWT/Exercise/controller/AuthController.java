package com.cognizant.JWT.Exercise.controller;

import com.cognizant.JWT.Exercise.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import jakarta.servlet.http.HttpServletRequest;

@RestController
public class AuthController {

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] decoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(decoded);
            String[] userDetails = credentials.split(":", 2);

            String username = userDetails[0];
            String password = userDetails[1];

            if ("kakashi".equals(username) && "sharingan".equals(password)) {
                String token = JwtUtil.generateToken(username);
                return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
            }
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
