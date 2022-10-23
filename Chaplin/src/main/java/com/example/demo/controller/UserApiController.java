package com.example.demo.controller;

import com.example.demo.model.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserApiController {

    @RequestMapping("/api/users")
    public User user() {
        System.out.println("UserApiController 진입");

        User user = new User("홍길동");
        return user;
    }
}
