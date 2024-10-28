package com.ecommerce.trendhub.trendhub_backend.configuration;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.ecommerce.trendhub.trendhub_backend.security.JwtAuthenticationEntryPoint;
import com.ecommerce.trendhub.trendhub_backend.security.JwtAuthenticationFilter;
import com.ecommerce.trendhub.trendhub_backend.service.userDetailsService;

@Configuration
public class SecurityFilterConfig {
	@Autowired
	private userDetailsService userDetailsService;
	
	@Autowired
    private JwtAuthenticationEntryPoint point;
	
	@Autowired
    private JwtAuthenticationFilter filter;
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
		return http.getSharedObject(AuthenticationManagerBuilder.class)
				.userDetailsService(userDetailsService)
				.passwordEncoder(passwordEncoder())
				.and().build();
				
	}
	
	
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity security) throws Exception {
        return security.csrf(csrf -> csrf.disable())
        		
                .authorizeHttpRequests(auth -> auth.requestMatchers("/authenticate").permitAll()
                		.requestMatchers("/images/**").permitAll()
                        .anyRequest().authenticated())
                .cors(withDefaults())
                .exceptionHandling(ex -> ex.authenticationEntryPoint(point))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}
