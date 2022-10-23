package com.example.demo.repository;

import com.example.demo.model.Destination;
import com.example.demo.model.Plan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface DesRepository extends JpaRepository<Destination, Integer> {
    Optional<Destination> findByPlan(Optional<Plan> plan);

    void deleteAllByPlan(Plan plan);
}
