package com.example.demo.controller;

import com.example.demo.service.SmsService;
import lombok.RequiredArgsConstructor;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RequiredArgsConstructor
@RestController
@RequestMapping("/sms")
public class SmsController {

    private final SmsService smsService; {

    }


    // coolSMS 구현 로직 연결
    @GetMapping
    public @ResponseBody String sendSMS(@RequestParam String phoneNumber) {
        Random rand  = new Random();
        String numStr = "";
        for(int i=0; i<4; i++) {
            String ran = Integer.toString(rand.nextInt(10));
            numStr+=ran;
        }

        System.out.println("수신자 번호 : " + phoneNumber);
        System.out.println("인증번호 : " + numStr);
        smsService.certifiedPhoneNumber(phoneNumber,numStr);
        return numStr;
    }
}