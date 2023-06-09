import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from 'src/model/phone/PhoneModel';
import { PhoneService } from 'src/service/phone/phone.service';

@Component({
  selector: 'app-detail-phone',
  templateUrl: './detail-phone.component.html',
  styleUrls: ['./detail-phone.component.css']
})
export class DetailPhoneComponent {
  idPhone: number = 0;
  phoneDetail: Phone = {
  };


  constructor(private activatedRoute: ActivatedRoute,
    private phoneService: PhoneService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.idPhone = Number(param.get('id'));
      this.phoneService.getPhoneById(this.idPhone).subscribe((data) => {
        this.phoneDetail = data;
        console.log(this.phoneDetail);
      })
    }
    )
  }
}
