package com.backend.spt.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int studentId;
    private String name;
    @Column(unique = true)
    private String email;
    private String password;
    private String about;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Course> courses;
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Assignment> assignments = new ArrayList<>();
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Goal> goals = new ArrayList<>();

}
