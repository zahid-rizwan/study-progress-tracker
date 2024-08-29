package com.backend.spt.controllers;

import com.backend.spt.payloads.GoalDto;
import com.backend.spt.sevices.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class GoalController {
    @Autowired
    private GoalService goalService;
    @PostMapping("/student/{studentId}/goal")
    ResponseEntity<GoalDto> createGoal(@RequestBody GoalDto goalDto, @PathVariable("studentId") int studentId){
        GoalDto goal=this.goalService.createGoal(goalDto,studentId);
        return new ResponseEntity<>(goal, HttpStatus.CREATED);
    }
}
