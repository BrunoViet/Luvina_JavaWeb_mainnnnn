import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  readonly API_URL = 'http://localhost:9191';
  constructor(private http: HttpClient) { }

  getOrderList() {
    return this.http.get<Object[]>(this.API_URL + '/orders');
  }

  saveOrder(id: number): Observable<void> {
    return this.http.post<void>(this.API_URL + '/addorder' , id)
  }
}
