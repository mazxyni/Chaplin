package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class PlanApiController {

    @GetMapping("/api/pln")
    public List<String> ApiPlan() {
        return Arrays.asList("연결해라");
    }
}
