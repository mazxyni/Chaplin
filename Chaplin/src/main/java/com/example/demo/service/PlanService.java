package com.example.demo.service;

import com.example.demo.model.Plan;
import com.example.demo.model.User;
import com.example.demo.repository.DesRepository;
import com.example.demo.repository.PlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PlanService {
    private final PlanRepository planRepository;
    private final DesRepository desRepository;


    public Optional<Plan> getPlanById(Integer plnSq) {
        return planRepository.findById(plnSq);
    }
//    public List<Plan> getPlanAll() {
//        return planQueryRepository.findAll();
//    }

    public List<Plan> getPlanByUser(User user){
        return planRepository.findByUser(user);
    }

    public Plan savePlan(Plan plan, User user) {
        plan.setUser(user);
        return planRepository.save(plan);
    }

    public Plan updatePlan(Integer plnSq, Plan plan) {
        Optional<Plan> origin = planRepository.findById(plnSq); //sq로 플랜 찾아오기
        Plan originPlan = origin.get(); //Optional 없애주기
        plan.setPlnSq(originPlan.getPlnSq()); //기존 sq를 업데이트할 plnSq로 설정
        return planRepository.save(plan); //저장
    }

    public int deletePlan(Integer plnSq) {
        Optional<Plan> plan = planRepository.findById(plnSq); //Plan 찾아오기

        if (plan.isPresent()) { //존재한다면
            desRepository.deleteAllByPlan(plan.get()); //Plan에 해당하는 목적지들 삭제
            planRepository.delete(plan.get()); //Plan 삭제
            return 1;
        }
        return 0;
    }
}
