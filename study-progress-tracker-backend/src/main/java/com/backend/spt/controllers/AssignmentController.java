package com.backend.spt.controllers;

import com.backend.spt.payloads.ApiResponse;
import com.backend.spt.payloads.AssignmentDto;
import com.backend.spt.sevices.AssignmentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AssignmentController {
    @Autowired
    private AssignmentServices assignmentService;
    @PostMapping("/student/{studentId}/assignment")
    ResponseEntity<AssignmentDto> createAssignment(@RequestBody AssignmentDto assignmentDto, @PathVariable("studentId") int studentId){
        AssignmentDto assignment=this.assignmentService.createAssignment(assignmentDto,studentId);
        return new ResponseEntity<>(assignment,HttpStatus.CREATED);
    }
    @PutMapping("/student/assignment/{assignmentId}")
    ResponseEntity<AssignmentDto> updateAssignment(@RequestBody AssignmentDto assignmentDto,@PathVariable("assignmentId") int assignmentId){
        AssignmentDto assignment=this.assignmentService.updateAssignment(assignmentDto,assignmentId);
        return new ResponseEntity<>(assignment,HttpStatus.OK);
    }
    @DeleteMapping("/student/assignment/{assignmentId}")
    public ResponseEntity<ApiResponse> deleteAssignment(@PathVariable("assignmentId") int assignmentId){
        this.assignmentService.deleteAssignment(assignmentId);
        return new ResponseEntity<>(new ApiResponse("Assignment deleted successfully",true),HttpStatus.OK);
    }
    @GetMapping("/student/assignment/{studentId}")
    public ResponseEntity<List<AssignmentDto>> getAssignmentsByStudent(@PathVariable("studentId") int studentId){
        List<AssignmentDto> assignment=this.assignmentService.getAssignmentsByStudent(studentId);
        return new ResponseEntity<>(assignment,HttpStatus.OK);
    }

}

