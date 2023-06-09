import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/model/phone/Category';
import { Phone } from 'src/model/phone/PhoneModel';
import { CategoryService } from 'src/service/phone/category.service';
import { PhoneService } from 'src/service/phone/phone.service';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.css']
})
export class EditPhoneComponent {
  categoryList: Category[] = [];
  phone: Phone = {};
  idPhone: number = 0;
  phoneForm!: FormGroup;
  phoneEdit: Phone = {};


  constructor(private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private phoneService: PhoneService,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.activatedRoute.paramMap.subscribe((param) => {
      this.idPhone = Number(param.get('id'));
      this.phoneService.getPhoneById(this.idPhone).subscribe(
        (data) => {
          this.phoneEdit = data;
          this.phoneForm = this.fb.group({
            id: [this.idPhone],
            brand: [this.phoneEdit.brand],
            description: [this.phoneEdit.description],
            category: [this.phoneEdit.category],
            imgUrl: [this.phoneEdit.imgUrl],
            price: [this.phoneEdit.price],
          })
        }
      );
    }
    );
  }

  getCategory() {
    this.categoryService.getCategoryList().subscribe(
      (data: any) => {
        this.categoryList = data;
        console.log(data)
      }
    )
  }

  submit(id: number) {
    const value = this.phoneForm.value;
    console.log(value);
    this.phoneService.updatePhone(value).subscribe((data) => {
      alert('Chỉnh sửa thành công');
      this.router.navigateByUrl("/")
    })
  }
}
