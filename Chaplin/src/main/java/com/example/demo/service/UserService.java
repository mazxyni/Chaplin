package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public List<User> getUser() {
        return userRepository.findAll();
    }

    public User getUserBySq(Integer usrSq) {
        return userRepository.findById(usrSq).get();
    }

    public User getUserById(String usrId) {
        return userRepository.findByUsrId(usrId);
    }

    @Transactional
    public User saveUser(User user) {
        validateDuplicateUserId(user);  // 아이디 중복 확인
        String encodedPassword = passwordEncoder.encode(user.getUsrPw());
        user.setUsrPw(encodedPassword);
        return userRepository.save(user);
    }

    // 아이디 중복 확인
    private void validateDuplicateUserId(User user) {
        User findUser = getUserById(user.getUsrId());
        if (findUser != null) {
            throw new IllegalStateException("이미 존재하는 아이디입니다.");
        }
    }

    @Transactional
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    @Transactional
    public int deleteUser(Integer usrSq) {
        Optional<User> user = userRepository.findById(usrSq);

        if (user.isPresent()) {
            userRepository.delete(user.get());
            return 1;
        }
        return 0;
    }

}
