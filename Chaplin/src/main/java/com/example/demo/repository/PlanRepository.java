package com.example.demo.repository;

import com.example.demo.model.Plan;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Integer> {

    List<Plan> findByUser(User user);
//
//    @Query("select p from Plan p join fetch p.user ")
//    List<Plan> findAllWithUser();
}
