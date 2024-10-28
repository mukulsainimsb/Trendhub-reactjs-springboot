package com.ecommerce.trendhub.trendhub_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class UserAccount {
			
		@Id
		@GeneratedValue(strategy=GenerationType.SEQUENCE,generator = "USERACCOUNT_SEQ")
		private Integer id;
		@Size(min=2, message="name should contain atleast 2 character")
		private String name;
		@NotBlank(message="password is required")
		@Size(min=6, message="password should be atleast 6 character long")
		private String password;
		@NotBlank(message="Email is required")
		@Email(message="Email should be valid")
		private String email;
		@NotNull(message="phone is required")
		@Size(min=10, message="phone should contain minimum 10 character")
		private String phone;
		private String role;
		
		protected UserAccount() {
			
		}
		
		public UserAccount(Integer id, String name, String password, String email, String phone, String role) {
			super();
			this.id = id;
			this.name = name;
			this.password = password;
			this.email = email;
			this.phone = phone;
			this.role = role;
		}
		


		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public String getRole() {
			return role;
		}

		public void setRole(String role) {
			this.role = role;
		}

		@Override
		public String toString() {
			return "Account [id=" + id + ", name=" + name + ", password=" + password + ", email=" + email + ", phone="
					+ phone + "]";
		}
		
		
	}

