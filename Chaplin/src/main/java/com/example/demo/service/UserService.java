package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> getUser() {
        return userRepository.findAll();
    }

    public User getUserBySq(Integer usrSq) {
        return userRepository.findById(usrSq).get();
    }

    @Transactional
    public User saveUser(User user) {
        return userRepository.save(user);
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
