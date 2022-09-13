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

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "pln_inf_tb")
public class Plan {

    @Id // pk 설정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int plnSq;

    @ManyToOne // 하나의 회원은 여러개의 일정
    @JoinColumn(name="usr_sq")
    private User user; //참조할 테이블

    @ManyToOne // 하나의 광역시도는 여러개의 일정
    @JoinColumn(name="met_sq")
    private Metropolitan metropolitan;

    @ManyToOne // 하나의 시군구는 여러개의 일정
    @JoinColumn(name="city_sq")
    private City city;

    @Column(name="pln_nm")
    private String plnNm;

    @Column(name="pln_s_dd")
    private Date plnSDd;

    @Column(name="pln_e_dd")
    private Date plnFDd;

    @CreationTimestamp
    @Column(name="pln_reg_dt")
    private Timestamp plnRegDt;

    @UpdateTimestamp
    @Column(name="pln_mod_dt")
    private Timestamp plnModDt;
}
