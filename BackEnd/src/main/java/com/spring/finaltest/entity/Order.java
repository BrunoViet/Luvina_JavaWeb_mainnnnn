package com.spring.finaltest.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "oderphone")
public class Order {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @Column(name= "quantity")
    private Integer quantity;

    @Column(name= "id_phone")
    private Integer id_phone;


    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_phone", referencedColumnName = "id", nullable = false,insertable=false, updatable=false)
    Phone phone;

}
