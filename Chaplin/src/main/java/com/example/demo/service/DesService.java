package com.example.demo.service;

import com.example.demo.model.Destination;
import com.example.demo.model.Plan;
import com.example.demo.repository.DesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DesService {

    private final DesRepository desRepository;

    public Destination saveDestination(Destination destination, Plan plan){
        destination.setPlan(plan);
        return desRepository.save(destination);
    }

    public Optional<Destination> getDesByPlan(Plan plan) {
        return desRepository.findByPlan(plan);
    }
}
