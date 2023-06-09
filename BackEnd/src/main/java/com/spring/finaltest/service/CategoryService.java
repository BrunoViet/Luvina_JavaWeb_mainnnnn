package com.spring.finaltest.service;

import com.spring.finaltest.entity.Category;
import com.spring.finaltest.entity.Phone;
import com.spring.finaltest.repository.CategoryRepository;
import com.spring.finaltest.repository.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository repository;

    public List<Category> getCategory() {
        return repository.findAll();
    }
}
