package com.ecommerce.trendhub.trendhub_backend.model;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator = "PRODUCT_SEQ")
	private Integer id;
	private String name;
	private BigDecimal price;
	private BigDecimal newPrice;
	private String image;
	private boolean stock;
	private int discount;
	private String category;
	public Product(Integer id, String name, BigDecimal price, BigDecimal newPrice, String image, boolean stock,
			int discount, String category) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.newPrice = newPrice;
		this.image = image;
		this.stock = stock;
		this.discount = discount;
		this.category = category;
	}
	
	public Product() {
		//default constructor
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

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public BigDecimal getNewPrice() {
		return newPrice;
	}

	public void setNewPrice(BigDecimal newPrice) {
		this.newPrice = newPrice;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public boolean isStock() {
		return stock;
	}

	public void setStock(boolean stock) {
		this.stock = stock;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", price=" + price + ", newPrice=" + newPrice + ", image="
				+ image + ", stock=" + stock + ", discount=" + discount + ", category=" + category + "]";
	}
	
	
}
