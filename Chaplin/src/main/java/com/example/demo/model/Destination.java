package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.math.BigDecimal;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "pln_des_tb")
public class Destination {

    @Id // pk 설정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int desSq;

    @ManyToOne // 하나의 일정은 여러개의 목적지
    @JoinColumn(name="pln_sq")
    private Plan plan; //참조할 테이블

    @ManyToOne // 하나의 광역시도는 여러개의 목적지
    @JoinColumn(name="met_sq")
    private Metropolitan metropolitan;

    @ManyToOne // 하나의 시군구는 여러개의 목적지
    @JoinColumn(name="city_sq")
    private City city;

    @Column(name="des_dd")
    private Date desDd;

    @Column(name="des_no")
    private String desNo;

    @Column(name="des_lat")
    private BigDecimal desLat;

    @Column(name="des_long")
    private BigDecimal desLong;

    @Column(name="des_nm")
    private String desNm;
}
