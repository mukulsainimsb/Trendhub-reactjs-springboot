package com.ecommerce.trendhub.trendhub_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.trendhub.trendhub_backend.model.UserAccount;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount,Integer> {
	
	public UserAccount findByEmail(String email);

}
