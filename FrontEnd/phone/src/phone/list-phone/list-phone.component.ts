import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/model/phone/Category';
import { Phone } from 'src/model/phone/PhoneModel';
import { CategoryService } from 'src/service/phone/category.service';
import { PhoneService } from 'src/service/phone/phone.service';

@Component({
  selector: 'app-list-phone',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.css']
})
export class ListPhoneComponent {
  phoneList: Phone[] = [];
  categoryList: Category[] = [];
  scrollTop = 0;
  phoneDelete: Phone = {};

  constructor(private phoneService: PhoneService,
    private categoryService: CategoryService,
    private router: Router, private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.getPhoneList();
    this.getCategoryList();
    // this.activatedRoute.paramMap.subscribe((param) => {
    //   this.idOrder = Number(param.get('id'));
    //   this.phoneService.getPhoneById(this.idOrder).subscribe((data) => {
    //     this.phoneDetail = data;
    //   })
    // }
    // )
  }

  getPhoneList() {
    this.phoneService.getPhoneList().subscribe(
      (data: any) => {
        this.phoneList = data;
      }
    );
  }

  deleteForm(phone: Phone) {
    this.phoneDelete = phone;
  }


  delete(id: any) {
    this.phoneService.deletePhone(id).subscribe(() => {
      alert("Xóa thành công");
      this.ngOnInit();
    })
  }

  getCategoryList() {
    this.categoryService.getCategoryList().subscribe(
      (data: any) => {
        this.categoryList = data;
        console.log(this.categoryList)
      }
    )
  }
}
