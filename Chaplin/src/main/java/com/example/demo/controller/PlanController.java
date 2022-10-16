package com.example.demo.controller;


import com.example.demo.config.auth.PrincipalDetails;
import com.example.demo.model.Destination;
import com.example.demo.model.Plan;
import com.example.demo.model.User;
import com.example.demo.service.DesService;
import com.example.demo.service.PlanService;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/pln")
@RequiredArgsConstructor
public class PlanController {

    private final PlanService planService;
    private final UserService userService;
    private final DesService desService;

    // 회원의 일정 가져오기 (Plan 반환)
    @GetMapping("")
    public Optional<Plan> getPlanByUsrId(Authentication authentication){
        PrincipalDetails userDetails = (PrincipalDetails) authentication.getPrincipal();
        User user = userService.getUserById(userDetails.getUsername());

        return planService.getPlanByUser(user);
    }

    // 일정 번호에 따라 상세 목적지 가져오기
    @GetMapping("/{plnSq}")
    public Optional<Destination> getDesByPlnSq(@PathVariable Integer plnSq){
        Plan plan = planService.getPlanById(plnSq);
        return desService.getDesByPlan(plan);
    }

    // 일정 저장하기 (저장된 Plan 반환)
    @Transactional
    @PostMapping("")
    public Plan savePlan(@RequestBody Plan plan, @RequestBody Destination destination, Authentication authentication){
        PrincipalDetails userDetails = (PrincipalDetails) authentication.getPrincipal();
        String usrId = userDetails.getUsername();
        User user = userService.getUserById(usrId);

        Plan savedPlan = planService.savePlan(plan, user);
        desService.saveDestination(destination, savedPlan);

        return savedPlan;
    }

    // 일정 수정하기 (수정된 Plan 반환)
    @Transactional
    @PatchMapping("/{plnSq}")
    public Plan updatePlan(@PathVariable Integer plnSq, @RequestBody Plan plan, @RequestBody Destination destination){
        Plan updatedPlan = planService.updatePlan(plnSq, plan);
        desService.saveDestination(destination, updatedPlan);

        return updatedPlan;
    }

    // 일정 삭제하기 (string response)
    @Transactional
    @DeleteMapping("/{plnSq}")
    public String deletePlan(@PathVariable Integer plnSq){
        String response = "";
        if (planService.deletePlan(plnSq) > 0) {
            response = "Success";
        } else {
            response = "이미 삭제된 일정입니다.";
        }

        return response;
    }
}