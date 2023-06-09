package com.spring.finaltest.controller;

import com.spring.finaltest.entity.Order;
import com.spring.finaltest.service.OrderService;
import com.spring.finaltest.service.OrderService;
import com.spring.finaltest.service.PhoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class OrderController {

    @Autowired
    private OrderService service;

    @Autowired
    private PhoneService Pservice;

    @PostMapping("/addorder/{id}")
    public void addOrder(@PathVariable int id){
        Order order = null;
        if(service.getAllOrder().stream().filter(o->o.getPhone().getId() == id).count()>0){
            order = service.getAllOrder().stream().filter(o->o.getPhone().getId()==id).findFirst().get();
            order.setQuantity(order.getQuantity()+1);
        }else{
            order = new Order();
            order.setQuantity(1);
            order.setId_phone(id);
            order.setPhone(Pservice.getPhoneById(id));
        }

        System.out.println(order);
         service.saveorder(order);
    }


    @GetMapping("/orders")
    public List<Order> findAllOrder(){
        return service.getAllOrder();
    }

    @GetMapping("/order/{id}")
    public Order findOrderById(@PathVariable int id){
        return service.getOrderById(id);
    }

//    @PutMapping("/update")
//    public void  updateOrder(@RequestBody Order order){
//        System.out.println(order);
//        service.updateOrder(order);
//    }
}
