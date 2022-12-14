package com.example.demo.config.auth;

import com.example.demo.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

public class PrincipalDetails implements UserDetails {
    private User user;

    public PrincipalDetails(User user) {
        this.user = user;
    }

    //유저 권한
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        ArrayList<GrantedAuthority> auth = new ArrayList<>();
        auth.add(new SimpleGrantedAuthority(user.getUsrRole()));
        return auth;
    }

// 필요 시 새로운 인터페이스 만들어서 다중 상속

//    public Integer getUsrSq() {
//        return user.getUsrSq();
//    }
//
//    public String getUsrId() {
//        return user.getUsrId();
//    }
//
//    public String getUsrPw() {
//        return user.getUsrPw();
//    }
//
//    public String getUsrNm() {
//        return user.getUsrNm();
//    }
//
//    public String getUsrGn() {
//        return user.getUsrGn();
//    }
//
//    public String getUsrEm() {
//        return user.getUsrEm();
//    }
//
//    public String getUsrRole() {
//        return user.getUsrRole();
//    }
//
//    public Timestamp getUsrRegDt(){
//        return user.getUsrRegDt();
//    }
//
//    public Timestamp getUsrModDt(){
//        return user.getUsrModDt();
//    }

    @Override
    public String getPassword() {
        return user.getUsrPw();
    }

    //이름
    @Override
    public String getUsername() {
        return user.getUsrId();
    }

    //계정 만료 확인
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    //계정 잠금 확인
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    //계정 비밀번호 변경 확인
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    //계정 활성화 확인
    @Override
    public boolean isEnabled() {
        return true;
    }
}
