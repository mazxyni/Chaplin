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
@Table(name = "map_city_tb")
public class City {

    @Id // pk 설정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int citySq;

    @ManyToOne(fetch = FetchType.LAZY)// 하나의 광역시도는 여러개의 도시
    @JoinColumn(name="met_sq", insertable = false, updatable = false)
    private Metropolitan metropolitan;

    @Column(name="city_k_nm")
    private String cityKNm;

    @Column(name="city_e_nm")
    private String cityENm;
}
