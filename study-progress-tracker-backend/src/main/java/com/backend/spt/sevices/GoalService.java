package com.backend.spt.sevices;

import com.backend.spt.payloads.GoalDto;

public interface GoalService {
    GoalDto createGoal(GoalDto goalDto,Integer studentId);
}
