package com.example.backend.controller;

import com.example.backend.model.PostData;
import com.example.backend.repository.PostDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostDataController {
    @Autowired
    PostDataRepository pr;

    @GetMapping("api/postdata")
    public List<PostData> findAllPost() {
        return pr.findAll();
    }

    @PostMapping("api/postdata")
    public List<PostData> post(Model model) {

      return pr.findAll();
    }
}
