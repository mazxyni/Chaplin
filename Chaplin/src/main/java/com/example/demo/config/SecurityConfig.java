package com.example.demo.config;

import com.example.demo.config.auth.PrincipalDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final PrincipalDetailsService principalDetailsService;

    // 암호화 방식 빈(Bean) 생성
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // authenticationManager를 Bean 등록합니다.
//    @Bean
//    public AuthenticationManager authenticationManagerBean() throws Exception {
//        return authenticationManagerBean();
//    }

    @Bean
    DaoAuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
        daoAuthenticationProvider.setUserDetailsService(this.principalDetailsService);

        return daoAuthenticationProvider;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                // user 페이지 설정
                .antMatchers("/mypage/**").authenticated() // 로그인 필요
                .antMatchers("/pln/**").authenticated() // 로그인 필요
                // 기타 url은 모두 허용
                .anyRequest().permitAll()
                .and()
                .formLogin();

        http.csrf().disable();
        return http.build();
    }


//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .authorizeRequests()
//                // user 페이지 설정
//                .antMatchers("/mypage/**").authenticated() // 로그인 필요
//                .antMatchers("/pln/**").authenticated() // 로그인 필요
//                // 기타 url은 모두 허용
//                .anyRequest().permitAll()
//                .and()
//                .formLogin();
//
//
//        http.csrf().disable();
//                .loginPage("/login") // 로그인 페이지 경로 설정
//                .defaultSuccessUrl("/"); // 로그인 성공 후 기본적으로 리다이렉트되는 경로
//    }

}