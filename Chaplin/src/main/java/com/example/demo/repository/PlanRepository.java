package com.example.demo.repository;

import com.example.demo.model.Plan;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlanRepository extends JpaRepository<Plan, Integer> {
    List<Plan> findByUser_UsrSq(Integer usrSq, Pageable pageable);
}
