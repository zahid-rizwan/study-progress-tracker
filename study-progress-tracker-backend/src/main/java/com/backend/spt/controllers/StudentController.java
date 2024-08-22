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
@RequestMapping("/api/student")
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
    @PutMapping("/{studentId}")
    public ResponseEntity<StudentDto> updateStudent(@RequestBody StudentDto studentDto, @PathVariable("studentId") int studentId) {
        return ResponseEntity.ok(this.studentService.updateStudent(studentDto, studentId));
    }
    @GetMapping("/{studentId}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable("studentId") int studentId) {
        return ResponseEntity.ok(this.studentService.getStudentById(studentId));
    }
    @GetMapping("/email/{email}")
    public ResponseEntity<StudentDto> getStudentByEmail(@PathVariable("email") String email) {
        return ResponseEntity.ok(this.studentService.getStudentByEmail(email));
    }
//    @DeleteMapping("/{studentId}")
//    public void updateStudent(Student student) {
//
//    }
//    public void deleteStudent(int studentId) {
//
//    }

}
