package com.spring.finaltest.controller;

import com.spring.finaltest.entity.Phone;
import com.spring.finaltest.service.PhoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class PhoneController {

    @Autowired
    private PhoneService service;

    @PostMapping("/addphone")
     public Phone addPhone(@RequestBody Phone phone){
        phone.setId_category(phone.getCategory().getId());
        System.out.println(phone);
        return service.addPhone(phone);
     }

    @PostMapping("/addPhones")
    public List<Phone> addPhones(@RequestBody List<Phone> phones){
        return service.addListPhones(phones);
    }

    @GetMapping("/phones")
    public List<Phone> findAllPhone(){
        return service.getPhones();
    }

    @GetMapping("/phone/{id}")
    public Phone findPhoneById(@PathVariable int id){
        return service.getPhoneById(id);
    }

    @PutMapping("/update")
    public void  updatePhone(@RequestBody Phone phone){
        System.out.println(phone);
         service.updatePhone(phone);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable int id){
         service.deleteById(id);
    }
}
