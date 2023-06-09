package com.spring.finaltest.service;

import com.spring.finaltest.entity.Phone;
import com.spring.finaltest.repository.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PhoneService {

    @Autowired
    private PhoneRepository repository;

    public Phone addPhone(Phone phone) {
        return repository.save(phone);
    }

    public List<Phone> addListPhones(List<Phone> phones) {
        return repository.saveAll(phones);
    }

    public List<Phone> getPhones() {
        return repository.findAll();
    }


    public Phone getPhoneById(int id) {
        return repository.findById(id).orElse(null);
    }


//    public void deletePhone(Integer id) {
//       repository.deletePhoneBy(id);
//
//    }

    public void deleteById(int id) {
       repository.deleteById(id);
    }

    public void updatePhone(Phone phone) {
      repository.updatePhoneBy(phone.getBrand(),phone.getDescription(),phone.getCategory().getId(),phone.getImgUrl(),phone.getPrice(),phone.getId());
    }

}
