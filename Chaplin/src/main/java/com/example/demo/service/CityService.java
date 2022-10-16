package com.example.demo.service;

import com.example.demo.model.City;
import com.example.demo.model.Metropolitan;
import com.example.demo.repository.CityRepository;
import com.example.demo.repository.MetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CityService {
    private final CityRepository cityRepository;

    public List<City> getCity() {
        return cityRepository.findAll();
    }


    public City getCityBySq(Integer citySq) {
        return cityRepository.findById(citySq).get();
    }
}
