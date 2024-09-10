package com.backend.spt.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int subjectId;
    private String name;
    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;
}
