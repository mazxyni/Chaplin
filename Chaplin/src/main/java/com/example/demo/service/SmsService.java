package com.example.demo.service;

import java.util.HashMap;
import java.util.Random;
import org.json.simple.JSONObject;
import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import org.springframework.stereotype.Service;

@Service
public class SmsService {
    public String certifiedPhoneNumber(String phoneNumber, String cerNum) {

        String api_key = "NCSXQTRMGMAASAMI";
        String api_secret = "2JVOTSOA3N3598A3LPCUIWY5XJFIV52Y";
        Message coolsms = new Message(api_key, api_secret);

        // 4 params(to, from, type, text) are mandatory. must be filled
        HashMap<String, String> params = new HashMap<String, String>();
        params.put("to", phoneNumber);
        params.put("from", "01090796135");
        params.put("type", "SMS");
        params.put("text", "채플린 본인인증 번호는" + "[" + cerNum + "]" + "입니다.");

        try {
            JSONObject obj = (JSONObject) coolsms.send(params);
            System.out.println(obj.toString());
        } catch (CoolsmsException e) {
            System.out.println(e.getMessage());
            System.out.println(e.getCode());
        }

        return cerNum;
    }
}