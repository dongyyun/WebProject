package com.example.backend.controller;

import com.example.backend.model.User;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserApiController {

    @PostMapping("/api/users")
    public User user() {
        System.out.println("UserApiController  진입");

        User user = new User(1, "홍길동", "yun", "1234");

        return user;
    }
}
