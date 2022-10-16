package com.example.demo.controller;

import com.example.demo.service.SmsService;
import lombok.RequiredArgsConstructor;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/sms")
public class SmsController {

    private final SmsService smsService; {

    }

    // coolSMS 구현 로직 연결
    @GetMapping("/sendSMS")
    public @ResponseBody String sendSMS(@RequestParam(value="to") String to) throws CoolsmsException {
        return smsService.PhoneNumberCheck(to);
    }
}