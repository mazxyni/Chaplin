package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class TestController {
    @GetMapping(value = "/home")
    public String homePage() {
        return "index.html";
    }
}
