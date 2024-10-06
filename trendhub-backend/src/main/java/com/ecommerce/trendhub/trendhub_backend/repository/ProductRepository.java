package com.ecommerce.trendhub.trendhub_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.trendhub.trendhub_backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product,Integer> {

}
