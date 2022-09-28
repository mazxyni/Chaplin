package com.example.demo.repository;

import com.example.demo.model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DesRepository extends JpaRepository<Destination, Integer> {
}
