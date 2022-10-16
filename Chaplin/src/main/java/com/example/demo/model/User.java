package com.example.demo.model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

//Entity : 테이블 정보 설정
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "usr_tb")
public class User {

    @Id // pk 설정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int usrSq;

    @Column(name="usr_id")
    private String usrId;

    @Column(name="usr_pw")
    private String usrPw;

    @Column(name="usr_nm")
    private String usrNm;

    @Column(name="usr_gn")
    private String usrGn;

    @Column(name="usr_em")
    private String usrEm;

    @CreationTimestamp // 시간 자동 입력
    @Column(name="usr_reg_dt")
    private Timestamp usrRegDt;

    @UpdateTimestamp
    @Column(name="usr_mod_dt")
    private Timestamp usrModDt;

    @Builder.Default
    @OneToMany(mappedBy="user")
    private List<Plan> plans = new ArrayList<Plan>();

    // 스프링시큐리티 연동 위해 권한 추가
    @Column(name="usr_role")
    private String usrRole;

    public User(String usrNm) {
        this.usrNm = usrNm;
    }
}

