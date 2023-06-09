package com.spring.finaltest.service;

import com.spring.finaltest.entity.Category;
import com.spring.finaltest.entity.Order;
import com.spring.finaltest.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repoOrder;

    public List<Order> getAllOrder() {
        return repoOrder.findAll();
    }

    public Order getOrderById(int id) {
        return repoOrder.findById(id).get();
    }

    public void saveorder(Order o) {
         repoOrder.save(o);
    }

}
