package com.backend.spt.payloads;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class StudentDto {
    private int id;
    @NotEmpty
    @Size(min = 4 , message = "student name must be minimum of 4 characters")
    private String name;
    @Email(message = "your email is not valid !!")
    @NotEmpty(message = "email is required")
    private String email;
    @NotEmpty
    @Size(min = 3, max = 10, message = "password must be minimum of 3 characters and maximum of 10 characters")
    private String password;
    @NotEmpty
    private String about;
}
