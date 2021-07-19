package com.example.backend.controller;

import com.example.backend.model.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserApiController {

    @PostMapping("/api/users")
    public User user() {
        System.out.println("UserApiController  진입");

        User user = new User(1, "홍길동", "yun", "1234");

        return user;
    }
}
