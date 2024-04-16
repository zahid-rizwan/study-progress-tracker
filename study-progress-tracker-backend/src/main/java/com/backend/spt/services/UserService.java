package com.backend.spt.services;
import java.util.List;

import com.backend.spt.payloads.UserDto;

public interface UserService {
    Object JwtResponse = null;
    UserDto createUser(UserDto user);
    UserDto updateUser(UserDto user,Integer userId);
    UserDto getUserById(Integer id);
    List<UserDto> getAllUsers();
    void deleteUser(Integer userId);
    UserDto registerNewUser(UserDto userDto);

}
