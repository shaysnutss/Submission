package com.service.accountservice.Controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.accountservice.config.JwtService;
import com.service.accountservice.model.Account;
import com.service.accountservice.repository.AccountServiceRepository;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/demo-controller")
@RequiredArgsConstructor
public class demo {

    private final JwtService jwtService;
    private final AccountServiceRepository repository;

    @GetMapping("/demo")
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("access granted");
    }

    @GetMapping("/viewName")
    public ResponseEntity<?> viewName(HttpServletRequest request){
        String authHeader = request.getHeader("Authorization");
        if(authHeader == null || !authHeader.startsWith("Bearer ")){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No bearer token provided. This web app uses JWT Authentication");
        }

        String jwt = authHeader.substring(7);
        String userEmail = jwtService.extractUsername(jwt);
        Account accountToReturn = repository.findByEmail(userEmail);
        return ResponseEntity.ok(accountToReturn.getName());
        
    }

    @GetMapping("/getAccount")
    public ResponseEntity<?> getAccount(HttpServletRequest request){
        String authHeader = request.getHeader("Authorization");
        if(authHeader == null || !authHeader.startsWith("Bearer ")){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No bearer token provided. This web app uses JWT Authentication");
        }

        String jwt = authHeader.substring(7);
        String userEmail = jwtService.extractUsername(jwt);
        Account accountToReturn = repository.findByEmail(userEmail);
        return ResponseEntity.ok(accountToReturn);
        
    }

}
