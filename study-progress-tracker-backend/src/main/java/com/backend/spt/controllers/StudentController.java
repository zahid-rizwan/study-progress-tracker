package com.backend.spt.controllers;

import com.backend.spt.entities.Student;
import com.backend.spt.payloads.StudentDto;
import com.backend.spt.sevices.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private StudentService studentService;
    @PostMapping("/")
    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto) {
        // Logic to add student

        StudentDto student = this.studentService.createStudent(studentDto);
        System.out.println(student);
        return new ResponseEntity<>(student, HttpStatus.CREATED);
    }
//    @DeleteMapping("/{studentId}")
//    public void updateStudent(Student student) {
//
//    }
//    public void deleteStudent(int studentId) {
//
//    }

}
