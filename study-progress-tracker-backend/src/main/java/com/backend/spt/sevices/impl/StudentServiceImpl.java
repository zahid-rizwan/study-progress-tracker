package com.backend.spt.sevices.impl;

import com.backend.spt.entities.Student;
import com.backend.spt.exceptions.ResourceNotFoundException;
import com.backend.spt.payloads.StudentDto;
import com.backend.spt.repositories.StudentRepo;
import com.backend.spt.sevices.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepo studentRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public StudentDto createStudent(StudentDto studentDto) {
        Student student = this.dtoToStudent(studentDto);
        Student savedStudent = this.studentRepo.save(student);
        return this.studentToDto(savedStudent);
    }

    @Override
    public StudentDto updateStudent(StudentDto studentDto,Integer studentId) {
        Student student = this.studentRepo.findById(studentId).orElseThrow(()->new ResourceNotFoundException("Student not found" , "id",studentId));
        student.setName(studentDto.getName());
        student.setEmail(studentDto.getEmail());
        student.setAbout(studentDto.getAbout());
        student.setPassword(studentDto.getPassword());
        return this.studentToDto(this.studentRepo.save(student));

    }

    @Override
    public void deleteStudent(Integer id) {

    }

    @Override
    public StudentDto getStudentById(Integer studentId) {
        Student student =this.studentRepo.findById(studentId).orElseThrow(()->new ResourceNotFoundException("Student not found","id",studentId));
        return this.studentToDto(student);
    }

    @Override
    public StudentDto getStudentByEmail(String email) {
        Student student =this.studentRepo.findByEmail(email).orElseThrow(()->new ResourceNotFoundException("student not found",email,0));
        return this.studentToDto(student);
    }

    @Override
    public List<StudentDto> getAllStudents() {
        return null;
    }

    public Student dtoToStudent(StudentDto studentDto) {
        return this.modelMapper.map(studentDto, Student.class);
    }

    public StudentDto studentToDto(Student student) {
        return this.modelMapper.map(student, StudentDto.class);

    }
}
