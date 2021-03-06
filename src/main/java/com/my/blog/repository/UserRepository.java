package com.my.blog.repository;

import com.my.blog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

//dao
//자동으로 bean등록이 된다
//@Repository생략가능
public interface UserRepository extends JpaRepository<User,Integer> {
    //select * from user where username=1?;
    Optional<User> findByUsername(String username);


    //JPA네이밍 전략
    //select * from user where username=? and password=?;
    /*User findByUsernameAndPassword(String username, String password);*/

    /*@Query(value = "select * from user where username=?1 and password=?2", nativeQuery = true)
    User login(String username, String password);*/

    //스프링시큐리티
}
