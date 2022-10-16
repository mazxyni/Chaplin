package com.example.demo.controller;

import com.example.demo.model.City;
import com.example.demo.model.Metropolitan;
import com.example.demo.service.CityService;
import com.example.demo.service.MetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/city")
@RestController
public class CityController {

    private final CityService cityService;

    @GetMapping("")
    public List<City> getCity(){
        return cityService.getCity();
    }

    @GetMapping("/{citySq}")
    public City getCityBySq(@PathVariable("citySq") Integer citySq){
        return cityService.getCityBySq(citySq);
    }
}
