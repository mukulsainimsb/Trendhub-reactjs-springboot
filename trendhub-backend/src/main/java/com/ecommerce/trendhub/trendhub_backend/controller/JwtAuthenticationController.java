package com.ecommerce.trendhub.trendhub_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.trendhub.trendhub_backend.configuration.SecurityFilterConfig;
import com.ecommerce.trendhub.trendhub_backend.model.JwtRequest;
import com.ecommerce.trendhub.trendhub_backend.model.JwtResponse;
import com.ecommerce.trendhub.trendhub_backend.security.JwtHelper;
import com.ecommerce.trendhub.trendhub_backend.service.userDetailsService;

@RestController
public class JwtAuthenticationController {
	
	@Autowired
	private userDetailsService userDetailsService;
	
	@Autowired
	private SecurityFilterConfig config;
	
	@Autowired
    private JwtHelper helper;

    @PostMapping("/authenticate")
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request) throws AuthenticationException, Exception {

        this.doAuthenticate(request.getUsername(), request.getPassword());
        
        System.out.println("username"+request.getUsername()+" and password"+request.getPassword());
        
        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        
        System.out.println("userDetail object is"+userDetails);
        
        String token = this.helper.generateToken(userDetails);

        JwtResponse response = JwtResponse.builder()
                .jwtToken(token)
                .username(userDetails.getUsername()).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String email, String password) throws AuthenticationException, Exception {
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
        try {
            config.authenticationManager(null).authenticate(authentication);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Credentials Invalid !!");
        }

    }
}