package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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

    @Column(name="met_k_nm")
    private String MetKNm;

    @Column(name="met_e_nm")
    private String MetENm;
}
