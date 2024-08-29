package com.backend.spt.sevices.impl;

import com.backend.spt.entities.Goal;
import com.backend.spt.entities.Student;
import com.backend.spt.exceptions.ResourceNotFoundException;
import com.backend.spt.payloads.GoalDto;
import com.backend.spt.repositories.GoalRepo;
import com.backend.spt.repositories.StudentRepo;
import com.backend.spt.sevices.GoalService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
@Service

public class GoalServiceImpl implements GoalService {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private GoalRepo goalRepo;
    @Autowired
    private StudentRepo studentRepo;

    @Override
    public GoalDto createGoal(GoalDto goalDto ,Integer studentId ) {
    Student student = this.studentRepo.findById(studentId).orElseThrow(()->new ResourceNotFoundException("student not found","id",studentId));
        Goal goal = this.modelMapper.map(goalDto,Goal.class);

        goal.setSubject(goalDto.getSubject());

        goal.setGoalDescription(goalDto.getGoalDescription());
        goal.setTargetValue(goalDto.getTargetValue());
        goal.setStartDate(new Date());
        goal.setEndDate(new Date());
        goal.setStatus(goalDto.getStatus());
        goal.setProgress(goalDto.getProgress());
        goal.setStudent(student);
        Goal savedGoal = this.goalRepo.save(goal);
        System.out.println(savedGoal);
        return this.modelMapper.map(savedGoal, GoalDto.class);

    }
}
