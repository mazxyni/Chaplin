package com.example.demo.controller;

import com.example.demo.model.City;
import com.example.demo.model.Destination;
import com.example.demo.repository.DesRepository;
import com.example.demo.service.DesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/des")
@RestController
public class DesController {

    private final DesService desService;

}
