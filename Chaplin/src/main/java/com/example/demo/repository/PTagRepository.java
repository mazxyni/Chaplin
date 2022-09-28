package com.example.demo.repository;

import com.example.demo.model.PlaceTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PTagRepository extends JpaRepository<PlaceTag, Integer> {
}
