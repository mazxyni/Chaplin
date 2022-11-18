package com.example.demo.service;

import com.example.demo.model.Metropolitan;
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
        Plan origin = planRepository.findById(plnSq).get(); //sq로 플랜 찾아오기

        plan.setPlnSq(origin.getPlnSq()); // 기존 sq를 업데이트할 plnSq로 설정
        // 이 부분도 필요한 필드만 if문 처리해서 수정할 수 있도록 해야합니다 (userService 참고)

        if (plan.getPlnNm() != null) {
            origin.setPlnNm(plan.getPlnNm());
        } else if (plan.getPlnSDd() != null) {
            origin.setPlnSDd(plan.getPlnSDd());
        } else if (plan.getPlnFDd() != null) {
            origin.setPlnFDd(plan.getPlnFDd());
        } else if (plan.getMetropolitan() != null) {
            origin.setMetropolitan(plan.getMetropolitan());
        } else if (plan.getCity() != null) {
            origin.setCity(plan.getCity());
        }

        return planRepository.save(origin); //저장
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
