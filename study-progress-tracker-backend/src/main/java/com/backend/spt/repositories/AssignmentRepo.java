package com.backend.spt.repositories;

import com.backend.spt.entities.Assignment;
import com.backend.spt.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssignmentRepo extends JpaRepository<Assignment,Integer> {
    List<Assignment> findByStudent(Student student);
}
