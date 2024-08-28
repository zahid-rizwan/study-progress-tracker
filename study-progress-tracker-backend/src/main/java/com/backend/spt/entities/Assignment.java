package com.backend.spt.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.util.Date;

/**
 * Represents an assignment entity in the system.
 *
 * @author Zahid
 */
@Entity
@NoArgsConstructor
@Getter
@Setter
public class Assignment {

    /**
     * Unique identifier for the assignment.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    /**
     * Name of the assignment.
     */
    private String assignmentTitle;

    /**
     * Description of the assignment.
     */
    private String assignmentDescription;

    /**
     * Date when the assignment was added to the system.
     */
    private Date addedDate;

    /**
     * Date when the assignment is due.
     */
    private Date dueDate;

    /**
     * Current status of the assignment.
     */
    private String status;
    @ManyToOne
    private Student student;
}
