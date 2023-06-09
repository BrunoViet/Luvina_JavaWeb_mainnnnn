package com.spring.finaltest.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "phonedb")

public class Phone {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @Column(name = "brand")
    private String brand;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private double price;

    @Column(name = "imgUrl")
    private String imgUrl;

    @Column(name = "id_category")
    private Integer id_category;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_category", referencedColumnName = "id", nullable = false,insertable=false, updatable=false)
    Category category;

}
