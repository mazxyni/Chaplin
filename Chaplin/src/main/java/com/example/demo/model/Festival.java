package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "fes_tb")
public class Festival {

    @Id // pk 설정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int fesSq;

    @ManyToOne // 하나의 광역시도는 여러개의 도시
    @JoinColumn(name="met_sq")
    private Metropolitan metropolitan;

    @Column(name="fes_nm")
    private String fesNm;

    @Column(name="fes_s_dd")
    private Date fesSDd;

    @Column(name="fes_hh")
    private String fesHh;

    @Column(name="fes_ad")
    private String fesAd;

    @Column(name="fes_char")
    private String fesChar;

    @Column(name="fes_ex")
    private String fesEx;
}

