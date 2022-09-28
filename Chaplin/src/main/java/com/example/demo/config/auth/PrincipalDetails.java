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

    // 비밀번호
    @Override
    public String getPassword() {
        return user.getUsrPw();
    }

    //이름
    @Override
    public String getUsername() {
        return user.getUsrNm();
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
