package com.example.demo.repository;


import com.example.demo.model.Metropolitan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MetRepository extends JpaRepository<Metropolitan, Integer> {
    @Query("SELECT m FROM Metropolitan m JOIN FETCH m.cityList")
    List<Metropolitan> findAllWithCityListUsingFetchJoin();
}
