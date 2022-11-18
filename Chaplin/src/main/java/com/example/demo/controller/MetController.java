package com.example.demo.controller;

import com.example.demo.model.Metropolitan;
import com.example.demo.service.MetService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/met")
@RestController
public class MetController {

    private final MetService metService;

    @GetMapping("")
    public List<Metropolitan> getMetropolitan(){
        return metService.getMetropolitan();
    }

    @GetMapping("/{metSq}")
    public Metropolitan getMetropolitanBySq(@PathVariable("metSq") Integer metSq){
        return metService.getMetropolitanBySq(metSq);
    }
}
