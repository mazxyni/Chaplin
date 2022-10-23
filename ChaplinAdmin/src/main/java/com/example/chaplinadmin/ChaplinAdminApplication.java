package com.example.chaplinadmin;

import de.codecentric.boot.admin.server.config.EnableAdminServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAdminServer
public class ChaplinAdminApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChaplinAdminApplication.class, args);
    }

}
