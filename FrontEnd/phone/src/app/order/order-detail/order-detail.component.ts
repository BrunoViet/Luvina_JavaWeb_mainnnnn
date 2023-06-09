import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/model/order/Order';
import { Category } from 'src/model/phone/Category';
import { Phone } from 'src/model/phone/PhoneModel';
import { OrderService } from 'src/service/order/order.service';
import { CategoryService } from 'src/service/phone/category.service';
import { PhoneService } from 'src/service/phone/phone.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  money: number = 0;
  phoneDetail: Phone = {
  };
  idPhone: number = 0;

  categoryList: Category[] = [];
  quantity1: number = 0


  constructor(private orderService: OrderService,
    private categoryService: CategoryService,
    private router: Router, private activatedRoute: ActivatedRoute,
    private phoneService: PhoneService) {
  }

  ngOnInit(): void {
    this.getCategoryList();
    this.activatedRoute.paramMap.subscribe((param) => {
      this.idPhone = Number(param.get('id'));
      this.phoneService.getPhoneById(this.idPhone).subscribe((data) => {
        this.phoneDetail = data;
      })
    }
    )

  }

  getCategoryList() {
    this.categoryService.getCategoryList().subscribe(
      (data: any) => {
        this.categoryList = data;
        console.log(this.categoryList)
      }
    )
  }


 changeQuantity(quantity: any, phoneDetail: Phone) {
     if (!quantity) {
       this.money = +phoneDetail.price!
    } else {
      this.quantity1 = Number(quantity);
      this.money = phoneDetail.price! * quantity
    }

  }
}
