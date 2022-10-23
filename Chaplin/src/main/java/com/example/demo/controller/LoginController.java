package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@SessionAttributes("user")
@Controller

public class LoginController {
    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public void loginView() {

    }

    @PostMapping("/login")
    public String login(User user, Model model) {
        User findUser = userService.getUserBySq(user.getUsrSq());

        if(findUser!=null && findUser.getUsrPw().equals(user.getUsrPw())) {
            model.addAttribute("user", findUser);
            return "forward:getPlanList";
        } else {
            return "redirect:login";
        }
    }
}
