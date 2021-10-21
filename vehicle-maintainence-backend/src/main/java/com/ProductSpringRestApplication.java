package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController


public class ProductSpringRestApplication {
//	@RequestMapping("/home")
//	public String getHome() {
//		return "Welcome to Spring Boot Microservice";
//	}
	public static void main(String[] args) {
		SpringApplication.run(ProductSpringRestApplication.class, args);
	}

}
