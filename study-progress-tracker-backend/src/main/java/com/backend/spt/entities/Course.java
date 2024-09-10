package com.backend.spt.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Course {
    @Id
    @GeneratedValue(strategy =GenerationType.AUTO)
    private int courseId;
    private String courseName;
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Subject> subjects;
    @ManyToOne
    private Student student;

}
