package com.backend.spt.sevices.impl;

import com.backend.spt.entities.Student;
import com.backend.spt.payloads.StudentDto;
import com.backend.spt.repositories.StudentRepo;
import com.backend.spt.sevices.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public Student dtoToStudent(StudentDto studentDto) {
        return this.modelMapper.map(studentDto, Student.class);
    }

    public StudentDto studentToDto(Student student) {
        return this.modelMapper.map(student, StudentDto.class);

    }
}
