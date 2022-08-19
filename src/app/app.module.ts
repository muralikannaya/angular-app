import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule  } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { FooterComponent } from './component/footer/footer.component';
import { ImagepageComponent } from './component/imagepage/imagepage.component';
import { PaymentpageComponent } from './component/paymentpage/paymentpage.component';
import { PtmheaderComponent } from './component/ptmheader/ptmheader.component';
import { Ptmpage1Component } from './component/ptmpage1/ptmpage1.component';
import { Ptmpage2Component } from './component/ptmpage2/ptmpage2.component';
import { Ptmpage3Component } from './component/ptmpage3/ptmpage3.component';
import { Ptmpage4Component } from './component/ptmpage4/ptmpage4.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,   
    CartComponent,
    ProductsComponent,
    FilterPipe,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    ImagepageComponent,
    PaymentpageComponent,
    PtmheaderComponent,
    Ptmpage1Component,
    Ptmpage2Component,
    Ptmpage3Component,
    Ptmpage4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, CartComponent,
    ProductsComponent,LoginComponent, SignupComponent,FooterComponent,ImagepageComponent, PtmheaderComponent,Ptmpage1Component,
    Ptmpage2Component,
    Ptmpage3Component,
    Ptmpage4Component,]
})
export class AppModule { }

