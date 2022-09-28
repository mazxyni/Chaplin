package com.example.demo.repository;

import com.example.demo.model.Metropolitan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MetRepository extends JpaRepository<Metropolitan, Integer> {
}
