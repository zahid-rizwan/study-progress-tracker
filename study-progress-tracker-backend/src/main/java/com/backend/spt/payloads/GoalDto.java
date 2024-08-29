package com.backend.spt.payloads;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class GoalDto {

    private int goalId;
    private  String subject;
    private String goalDescription;
    private String targetValue;
    private Date startDate;
    private Date endDate;
    private String status;
    private double progress;
    private StudentDto student;
}
