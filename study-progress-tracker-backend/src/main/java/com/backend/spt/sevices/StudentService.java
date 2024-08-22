package com.backend.spt.sevices;

import com.backend.spt.payloads.StudentDto;

import java.util.List;

public interface StudentService {
    StudentDto createStudent(StudentDto student);
    StudentDto updateStudent(StudentDto student,Integer id);
    void deleteStudent(Integer studentId);
    StudentDto getStudentById(Integer id);
    StudentDto getStudentByEmail(String email);
    List<StudentDto> getAllStudents();


}
