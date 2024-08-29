package com.backend.spt.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor

@Table(name = "goals")
public class Goal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int goalId;
    private  String subject;
    private String goalDescription;
    private String targetValue;
    private Date startDate;
    private Date endDate;
    private String status;
    private double progress;
    @ManyToOne
    private Student student;
}
