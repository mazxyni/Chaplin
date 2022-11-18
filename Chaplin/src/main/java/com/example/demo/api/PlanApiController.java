package com.example.demo.api;

import edu.emory.mathcs.backport.java.util.Arrays;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlanApiController {
    @GetMapping("/api/pln")
    public List<String> Plan() {
        return Arrays.asList("plnNm");
    }
}
