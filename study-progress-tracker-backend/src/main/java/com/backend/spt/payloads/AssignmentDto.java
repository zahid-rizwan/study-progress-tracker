package com.backend.spt.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@NoArgsConstructor
@Getter
@Setter

public class AssignmentDto {
    private int assignmentId;
    private String assignmentTitle;
    private String description;
    private Date addedDate;
    private Date dueDate;
    private String status;
    private  StudentDto student;
}
