package com.example.demo.config.auth;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
public class PrincipalDetailsService implements UserDetailsService {

    public UserRepository userRepository;

    /**
     * Id를 통해 유무확인 오버라이드하느라 함수이름은 Username으로 설정 돼 있음 주의!
     * @param usrId the username identifying the user whose data is required.
     * @return
     * @throws UsernameNotFoundException
     */
    @Override
    public UserDetails loadUserByUsername(String usrId) throws UsernameNotFoundException {
        User user = userRepository.findByUsrId(usrId);
        if(user != null){
            PrincipalDetails principalDetails = new PrincipalDetails(user);
            return principalDetails;
        }
        return null;
    }

}
