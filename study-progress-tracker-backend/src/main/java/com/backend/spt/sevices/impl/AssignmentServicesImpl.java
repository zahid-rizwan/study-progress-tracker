package com.backend.spt.sevices.impl;

import com.backend.spt.entities.Assignment;
import com.backend.spt.entities.Student;
import com.backend.spt.exceptions.ResourceNotFoundException;
import com.backend.spt.payloads.AssignmentDto;
import com.backend.spt.repositories.AssignmentRepo;
import com.backend.spt.repositories.StudentRepo;
import com.backend.spt.sevices.AssignmentServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AssignmentServicesImpl implements AssignmentServices {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private AssignmentRepo assignmentRepo;
    @Autowired
    private StudentRepo studentRepo;

    @Override
    public AssignmentDto createAssignment(AssignmentDto assignmentDto,Integer studentId) {
        Student student = this.studentRepo.findById(studentId).orElseThrow(
                () -> new ResourceNotFoundException("Student not found", "id", studentId)
        );
        Assignment assignment = this.modelMapper.map(assignmentDto,Assignment.class);

        assignment.setAssignmentTitle(assignmentDto.getAssignmentTitle());
        assignment.setAssignmentDescription(assignmentDto.getDescription());
        assignment.setAddedDate(new Date());
        assignment.setDueDate(new Date());
        assignment.setStatus(assignmentDto.getStatus());
        assignment.setStudent(student);

        Assignment assignment1 = this.assignmentRepo.save(assignment);
        return this.modelMapper.map(assignment1, AssignmentDto.class);
    }

    @Override
    public AssignmentDto updateAssignment(AssignmentDto assignmentDto, Integer assignmentId) {
        Assignment assignment = this.assignmentRepo.findById(assignmentId).
                orElseThrow(()->new ResourceNotFoundException("Assignment not found","id",assignmentId));

        assignment.setAssignmentTitle(assignmentDto.getAssignmentTitle());
        assignment.setAssignmentDescription(assignmentDto.getDescription());
        assignment.setStatus(assignmentDto.getStatus());
        Assignment assignment1 = this.assignmentRepo.save(assignment);
        return this.modelMapper.map(assignment1, AssignmentDto.class);

    }
    @Override
    public void deleteAssignment(Integer assignmentId) {
        Assignment assignment = this.assignmentRepo.findById(assignmentId).
                orElseThrow(()->new ResourceNotFoundException("Assignment not found","id",assignmentId));
        this.assignmentRepo.delete(assignment);
    }

    @Override
    public List<AssignmentDto> getAssignmentsByStudent(Integer studentId) {
        Student student =this.studentRepo.findById(studentId).orElseThrow(()->new ResourceNotFoundException("Student not found","id",studentId));
        List<Assignment> assignments = this.assignmentRepo.findByStudent(student);
        return assignments.stream().map(assignment -> this.modelMapper.map(assignment,AssignmentDto.class)).collect(Collectors.toList());
    }
}
