package com.example.demo.repository;

import com.example.demo.model.Plan;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Integer> {

    Optional<Plan> findByUser(User user);
}
