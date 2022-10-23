package com.example.demo.service;

import java.util.HashMap;
import java.util.Random;
import org.json.simple.JSONObject;
import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import org.springframework.stereotype.Service;

@Service
public class SmsService {
    public String PhoneNumberCheck(String to) throws CoolsmsException {

        String api_key = "NCSXQTRMGMAASAMI";
        String api_secret = "2JVOTSOA3N3598A3LPCUIWY5XJFIV52Y";
        Message coolsms = new Message(api_key, api_secret);

        Random rand = new Random();
        String numStr = "";
        for (int i = 0; i < 4; i++) {
            String ran = Integer.toString(rand.nextInt(10));
            numStr += ran;
        }

        // 4 params(to, from, type, text) are mandatory. must be filled
        HashMap<String, String> params = new HashMap<String, String>();
        params.put("to", "01090796135");
        params.put("from", "01090796135");
        params.put("type", "SMS");
        params.put("text", "채플린 본인인증 번호는" + "[" + numStr + "]" + "입니다.");

        try {
            JSONObject obj = (JSONObject) coolsms.send(params);
            System.out.println(obj.toString());
        } catch (CoolsmsException e) {
            System.out.println(e.getMessage());
            System.out.println(e.getCode());
        }

        return numStr;
    }
}