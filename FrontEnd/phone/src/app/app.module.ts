import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../LayoutComponent/header/header.component';
import { FooterComponent } from '../LayoutComponent/footer/footer.component';
import { ListPhoneComponent } from '../phone/list-phone/list-phone.component';
import { PhoneCreateComponent } from '../phone/create-phone/create-phone.component'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditPhoneComponent } from '../phone/edit-phone/edit-phone.component';
import { DetailPhoneComponent } from '../phone/detail-phone/detail-phone.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListPhoneComponent,
    PhoneCreateComponent,
    EditPhoneComponent,
    DetailPhoneComponent,
    OrderComponent,
    OrderDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
