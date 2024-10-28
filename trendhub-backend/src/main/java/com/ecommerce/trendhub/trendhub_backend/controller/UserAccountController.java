package com.ecommerce.trendhub.trendhub_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.trendhub.trendhub_backend.configuration.SecurityFilterConfig;
import com.ecommerce.trendhub.trendhub_backend.model.UserAccount;
import com.ecommerce.trendhub.trendhub_backend.repository.UserAccountRepository;

import jakarta.validation.Valid;

@RestController
public class UserAccountController {
	
	@Autowired
	private UserAccountRepository repository;
	
	@Autowired
	private SecurityFilterConfig config;
	
	@GetMapping("verify")
	public String verifyingAPI() {
		return "successful";
	}
	
	@GetMapping("/get-users")
	public List<UserAccount> getAllUsers(){
		return repository.findAll();
	}
	
	@GetMapping("/get-user-by-email/{email}")
	public ResponseEntity<Object> getUserByEmail(@PathVariable String email) {
	    UserAccount user = repository.findByEmail(email);
	    if (user != null) {
	        return ResponseEntity.status(HttpStatus.OK).body(user);
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	    }
	}

	
	@PostMapping("/save-user")
	public ResponseEntity<UserAccount> postUser(@Valid @RequestBody UserAccount account){
		String hashedPassword = config.passwordEncoder().encode(account.getPassword());
		account.setPassword(hashedPassword);
		account.setRole("USER");
		UserAccount user = repository.save(account);
		return ResponseEntity.status(HttpStatus.CREATED).body(user);
	}
	
	@GetMapping("/get-user/{id}")
	public ResponseEntity<UserAccount> getUser(@PathVariable Integer id) {
	  Optional<UserAccount> user = repository.findById(id);
	  
	  if(user.isPresent()) {
		  return ResponseEntity.ok(user.get());
	  }
	  else {
		  return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
	  }
	}
	
	@DeleteMapping("/delete-user/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable Integer id){
		Optional<UserAccount> user = repository.findById(id);
		
		if(user.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No such item to delete");
		}
		else {
			repository.deleteById(id);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("successfully deleted");
		}
	
	}
	
	@PutMapping("/update-user/{id}")
	public ResponseEntity<UserAccount> updateUser(
			@Valid
			@PathVariable Integer id,
			@RequestBody UserAccount updatedUser){
		return repository.findById(id).map(user ->{
			user.setEmail(updatedUser.getEmail());
			user.setName(updatedUser.getName());
			user.setPassword(updatedUser.getPassword());
			user.setPhone(updatedUser.getPhone());
			user.setRole(updatedUser.getRole());
			
			UserAccount savedUser = repository.save(user);
			return ResponseEntity.ok(savedUser);
		}).orElseGet(()->
			ResponseEntity.notFound().build());
	}
	
}
