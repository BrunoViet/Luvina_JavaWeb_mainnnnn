package com.spring.finaltest.repository;

import com.spring.finaltest.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

@Transactional

public interface OrderRepository extends JpaRepository<Order,Integer> {
    @Modifying
    @Query(value = " INSERT INTO oderphone (quantity,id) VALUES (?1,?2)",nativeQuery = true) void addOrder(int quantity,int id);
}
