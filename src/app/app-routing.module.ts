import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './component/login//login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ImagepageComponent } from './component/imagepage/imagepage.component';
import { Ptmpage1Component } from './component/ptmpage1/ptmpage1.component';
import { Ptmpage2Component } from './component/ptmpage2/ptmpage2.component';
import { Ptmpage3Component } from './component/ptmpage3/ptmpage3.component';
import { Ptmpage4Component } from './component/ptmpage4/ptmpage4.component';

const routes: Routes = [
  {path: '' , redirectTo: 'products',pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'imagepage', component:ImagepageComponent },
  {path:'ptmpage1', component:Ptmpage1Component},
  {path:'ptmpage2', component:Ptmpage2Component},
  {path:'ptmpage3', component:Ptmpage3Component},
  {path:'ptmpage4', component:Ptmpage4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
