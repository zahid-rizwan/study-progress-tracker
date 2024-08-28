package com.backend.spt.sevices;

import com.backend.spt.payloads.AssignmentDto;

import java.util.List;

public interface AssignmentServices {
    AssignmentDto createAssignment(AssignmentDto assignment,Integer studentId);
    AssignmentDto updateAssignment(AssignmentDto assignment,Integer assignmentId);
    void deleteAssignment(Integer assignmentId);
    List<AssignmentDto> getAssignmentsByStudent(Integer studentId);
}
