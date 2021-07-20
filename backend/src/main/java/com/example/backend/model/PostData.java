package com.example.backend.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity(name = "postdata")
public class PostData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    String message;
    String username;

    }

