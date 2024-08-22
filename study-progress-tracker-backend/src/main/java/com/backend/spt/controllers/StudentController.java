package com.backend.spt.controllers;

import com.backend.spt.entities.Student;
import com.backend.spt.payloads.StudentDto;
import com.backend.spt.sevices.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller for managing student operations.
 */
@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private StudentService studentService;

    /**
     * Creates a new student.
     *
     * @param studentDto The student data transfer object (DTO) containing the student's details.
     * @return A ResponseEntity containing the created student's DTO and a HTTP status code of CREATED.
     */
    @PostMapping("/")
    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto) {
        // Logic to add student

        StudentDto student = this.studentService.createStudent(studentDto);
        System.out.println(student);
        return new ResponseEntity<>(student, HttpStatus.CREATED);
    }

    /**
     * Updates an existing student.
     *
     * @param studentDto The student data transfer object (DTO) containing the updated student's details.
     * @param studentId The unique identifier of the student to be updated.
     * @return A ResponseEntity containing the updated student's DTO.
     */
    @PutMapping("/{studentId}")
    public ResponseEntity<StudentDto> updateStudent(@RequestBody StudentDto studentDto, @PathVariable("studentId") int studentId) {
        return ResponseEntity.ok(this.studentService.updateStudent(studentDto, studentId));
    }

    /**
     * Retrieves a student by their unique identifier.
     *
     * @param studentId The unique identifier of the student to be retrieved.
     * @return A ResponseEntity containing the student's DTO.
     */
    @GetMapping("/{studentId}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable("studentId") int studentId) {
        return ResponseEntity.ok(this.studentService.getStudentById(studentId));
    }

    /**
     * Retrieves a student by their email address.
     *
     * @param email The email address of the student to be retrieved.
     * @return A ResponseEntity containing the student's DTO.
     */
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
