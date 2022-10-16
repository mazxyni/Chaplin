package com.example.demo.service;

import com.example.demo.model.Metropolitan;
import com.example.demo.repository.MetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MetService {

    private final MetRepository metRepository;

    public List<Metropolitan> getMetropolitan() {
        return metRepository.findAll();
    }

    public Metropolitan getMetropolitanBySq(Integer metSq) {
        return metRepository.findById(metSq).get();
    }
}
