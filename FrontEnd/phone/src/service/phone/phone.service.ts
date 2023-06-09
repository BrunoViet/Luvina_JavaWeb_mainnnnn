import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Phone } from 'src/model/phone/PhoneModel';
import { Observable } from "rxjs"


// import {Observable} from "rxjs";
// import {Observable} from "rxjs/dist/types";

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  readonly API_URL = 'http://localhost:9191';

  constructor(private http: HttpClient) {
  }

  getPhoneList() {
    return this.http.get<Object[]>(this.API_URL + '/phones');
  }

  getPhoneById(id: number): Observable<Phone> {
    return this.http.get<Phone>(this.API_URL + '/phone/' + id);
  }

  savePhone(phone: Phone): Observable<void> {
    return this.http.post<void>(this.API_URL + '/addphone', phone)
  }

  updatePhone(phone: Phone): Observable<any> {
    return this.http.put<any>(this.API_URL + '/update', phone)
  }

  deletePhone(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL + '/delete/' + id)
  }

  getPhoneByBrand(name: string): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.API_URL + '/find-book-by-name?name=' + name);
  }
}
