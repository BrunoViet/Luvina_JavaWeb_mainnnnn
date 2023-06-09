import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Category } from 'src/model/phone/Category';
import { CategoryService } from 'src/service/phone/category.service';
import { PhoneService } from 'src/service/phone/phone.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-create-phone',
  templateUrl: './create-phone.component.html',
  styleUrls: ['./create-phone.component.css']
})
export class PhoneCreateComponent implements OnInit {
  phoneForm!: FormGroup;
  categoryList: Category[] = [];
  constructor(private phoneService: PhoneService,
    private router: Router,
    private fb: FormBuilder,
    private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.phoneForm = this.fb.group({
      id: [''],
      brand: [''],
      description: [''],
      price: [''],
      imgUrl: [''],
      category: [''],
    })
  }

  submit() {
    const value = this.phoneForm.value;
    console.log(value);
    this.phoneService.savePhone(value).subscribe((data) => {
      alert('Thêm mới thành công');
      this.router.navigateByUrl("/")
    })
  }

  getCategory() {
    this.categoryService.getCategoryList().subscribe(
      (data: any) => {
        this.categoryList = data;
      }
    )
  }
}


