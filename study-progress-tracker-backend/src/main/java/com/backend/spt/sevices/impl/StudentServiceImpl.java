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
import java.util.stream.Collectors;

/**
 * This class implements the StudentService interface and provides methods for managing student data.
 * It uses Spring's @Service annotation to mark it as a service component.
 */
@Service
public class StudentServiceImpl implements StudentService {
    /**
     * Autowired StudentRepo instance for database operations.
     */
    @Autowired
    private StudentRepo studentRepo;

    /**
     * Autowired ModelMapper instance for object mapping between Student and StudentDto.
     */
    @Autowired
    private ModelMapper modelMapper;

    /**
     * Creates a new student in the database.
     *
     * @param studentDto The StudentDto object containing the student's information.
     * @return The created StudentDto object.
     */
    @Override
    public StudentDto createStudent(StudentDto studentDto) {
        Student student = this.dtoToStudent(studentDto);
        Student savedStudent = this.studentRepo.save(student);
        return this.studentToDto(savedStudent);
    }

    /**
     * Updates an existing student in the database.
     *
     * @param studentDto The StudentDto object containing the updated student's information.
     * @param studentId The ID of the student to update.
     * @return The updated StudentDto object.
     */
    @Override
    public StudentDto updateStudent(StudentDto studentDto, Integer studentId) {
        Student student = this.studentRepo.findById(studentId).orElseThrow(
                () -> new ResourceNotFoundException("Student not found", "id", studentId)
        );
        student.setName(studentDto.getName());
        student.setEmail(studentDto.getEmail());
        student.setAbout(studentDto.getAbout());
        student.setPassword(studentDto.getPassword());
        return this.studentToDto(this.studentRepo.save(student));
    }

    /**
 * Deletes a student from the database based on the provided student ID.
 *
 * @param studentId The unique identifier of the student to be deleted.
 *
 * @throws ResourceNotFoundException If the student with the given ID does not exist in the database.
 */
@Override
public void deleteStudent(Integer studentId) {
    Student student = this.studentRepo.findById(studentId).orElseThrow(
            () -> new ResourceNotFoundException("Student not found", "id", studentId)
    );
    this.studentRepo.delete(student);
}

    /**
     * Retrieves a student by their ID.
     *
     * @param studentId The ID of the student to retrieve.
     * @return The retrieved StudentDto object.
     */
    @Override
    public StudentDto getStudentById(Integer studentId) {
        Student student = this.studentRepo.findById(studentId).orElseThrow(
                () -> new ResourceNotFoundException("Student not found", "id", studentId)
        );
        return this.studentToDto(student);
    }

    /**
     * Retrieves a student by their email.
     *
     * @param email The email of the student to retrieve.
     * @return The retrieved StudentDto object.
     */
    @Override
    public StudentDto getStudentByEmail(String email) {
        Student student = this.studentRepo.findByEmail(email).orElseThrow(
                () -> new ResourceNotFoundException("Student not found", email, 0)
        );
        return this.studentToDto(student);
    }

    /**
     * Retrieves all students from the database.
     *
     * @return A list of StudentDto objects representing all students.
     */
    @Override
    public List<StudentDto> getAllStudents() {
        List<Student> students = this.studentRepo.findAll();
        return students.stream().map(this::studentToDto).collect(Collectors.toList());
    }

    /**
     * Maps a StudentDto object to a Student object using ModelMapper.
     *
     * @param studentDto The StudentDto object to map.
     * @return The mapped Student object.
     */
    public Student dtoToStudent(StudentDto studentDto) {
        return this.modelMapper.map(studentDto, Student.class);
    }

    /**
     * Maps a Student object to a StudentDto object using ModelMapper.
     *
     * @param student The Student object to map.
     * @return The mapped StudentDto object.
     */
    public StudentDto studentToDto(Student student) {
        return this.modelMapper.map(student, StudentDto.class);
    }
}
