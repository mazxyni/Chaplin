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
@Table(name = "bot_ptag_tb")
public class PlaceTag {

    @Id // pk 설정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int ptagSq;

    @ManyToOne // 하나의 여행지는 여러개의 추천 태그 ?
    @JoinColumn(name="des_sq")
    private Destination destination;

    @OneToOne // 하나의 태그는 하나의 추천 태그
    @JoinColumn(name="tag_sq")
    private Tag tag;
}
