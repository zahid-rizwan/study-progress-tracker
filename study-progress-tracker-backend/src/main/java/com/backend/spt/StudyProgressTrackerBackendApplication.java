package com.backend.spt;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.backend.spt")
public class StudyProgressTrackerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudyProgressTrackerBackendApplication.class, args);
	}
	@Bean
    ModelMapper modelMapper(){
		return new ModelMapper();
	}

}
