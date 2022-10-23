package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "map_met_tb")
public class Metropolitan {

    @Id // pk 설정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int metSq;
//
//    @OneToMany(mappedBy = "metropolitan")
//    private List<City> cityList = new ArrayList<>();

    @Column(name="met_k_nm")
    private String MetKNm;

    @Column(name="met_e_nm")
    private String MetENm;
}
