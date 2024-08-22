package com.backend.spt.repositories;

import com.backend.spt.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepo  extends JpaRepository<Student,Integer> {
    Optional<Student> findByEmail(String email);
}
