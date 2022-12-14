package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RequestMapping("/usr")
@RestController
public class UserController {
//    @GetMapping("/usr")  - 전체조회 (Select)
//    @GetMapping("/usr/{id}") - 개별조회 (Select)
//    @PostMapping("/usr") - 등록 save (insert)
//    @PatchMapping("/usr/{id}") - 수정 save (Update)
//    @DeleteMapping("/usr/{id}") - 삭제 save (Delete)

    private final UserService userService;

    @GetMapping("")
    public List<User> getUser(){
        return userService.getUser();
    }

    @GetMapping("/{usrSq}")
    public User getUserBySq(@PathVariable("usrSq") Integer usrSq){
        return userService.getUserBySq(usrSq);
    }

    @PostMapping("")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @PatchMapping("/{usrSq}")
    public User updateUser(@PathVariable Integer usrSq, @RequestBody User user){
        return userService.updateUser(usrSq, user);
    }

    @DeleteMapping("/{usrSq}")
    public Map<String, Object> delete(@PathVariable("usrSq") Integer usrSq) {
        Map<String, Object> response = new HashMap<>();

        if (userService.deleteUser(usrSq) > 0) {
            response.put("result", "SUCCESS");
        } else {
            response.put("result", "FAIL");
            response.put("reason", "일치하는 회원 정보가 없습니다. 사용자 id를 확인해주세요.");
        }

        return response;
    }


    @ExceptionHandler(IllegalStateException.class)
    public Object validateDuplicateUserId(Exception e) {
        return e.getClass(); // 이미 사용 중인 아이디입니다.
    }


}
