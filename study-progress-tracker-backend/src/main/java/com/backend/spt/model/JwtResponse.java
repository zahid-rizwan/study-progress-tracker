package com.backend.spt.model;

import org.springframework.stereotype.Component;

import com.backend.spt.payloads.UserDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Component
public class JwtResponse {
    private String jwtToken;
    private UserDto user;
}
