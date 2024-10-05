package com.ecommerce.trendhub.trendhub_backend.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ecommerce.trendhub.trendhub_backend.entity.Product;
import com.ecommerce.trendhub.trendhub_backend.repository.ProductRepository;
import com.ecommerce.trendhub.trendhub_backend.service.ProductService;

@RestController
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@Autowired
	private ProductRepository repository;
	
	@GetMapping("/get-all-products")
	public List<Product> retrieveAllProducts(){
		List<Product> list = repository.findAll();
		return list;
	}
	
	@PostMapping("/save-product")
	public ResponseEntity<String> saveProduct(@ModelAttribute Product product, @RequestParam("file") MultipartFile image){
		if (image == null || image.isEmpty()) {
		    return ResponseEntity.badRequest().body("Image file is missing");
		}
		String filename = null;
		
		String path ="C:\\Users\\Mukul saini\\Downloads\\trendhub-backend\\trendhub-backend\\src\\main\\resources\\static\\images";
		
		try {
			filename=service.uploadImage(path, image);
		} catch (IOException e) {
			e.printStackTrace();
		}
				product.setImage(filename);
		
		repository.save(product);
		return ResponseEntity.ok("successfully created");
	}
	
	@DeleteMapping("/delete-product/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable int id){
		    repository.deleteById(id);
			return ResponseEntity.noContent().build();
	}
}
