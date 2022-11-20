package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@SessionAttributes("user")
@RequestMapping("api/login")
@Controller

public class LoginController {
    @Autowired
    private UserService userService;

    @GetMapping("")
    public void loginView() {

    }

    @PostMapping("")
    public String login(User user, Model model) {
        User findUser = userService.getUserById(user.getUsrId());

        if(findUser!=null && findUser.getUsrPw().equals(user.getUsrPw())) {
            model.addAttribute("user", findUser);
            return "forward:getPlanList";
        } else {
            return "redirect:login";
        }
    }
}
