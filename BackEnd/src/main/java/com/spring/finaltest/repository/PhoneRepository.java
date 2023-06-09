package com.spring.finaltest.repository;

import com.spring.finaltest.entity.Phone;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
@Transactional
public interface PhoneRepository extends JpaRepository<Phone,Integer> {

    @Modifying

    @Query(value = "UPDATE phonedb SET `brand` = ?1, `description` = ?2, `id_category` = ?3, `img_url` = ?4, `price` = ?5 WHERE `id` = ?6 ", nativeQuery = true)
    void updatePhoneBy(String brand,String description, Integer id_category, String img_url, Double price, Integer id);

    @Modifying
    @Query(value = "DELETE FROM phonedb WHERE `id` = ?1", nativeQuery = true) void deletePhoneBy(int id);
}
