package com.example.demo.repository;

import com.example.demo.model.Festival;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FesRepository extends JpaRepository<Festival, Integer> {
}
