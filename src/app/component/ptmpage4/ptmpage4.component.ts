import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-ptmpage4',
  templateUrl: './ptmpage4.component.html',
  styleUrls: ['./ptmpage4.component.css']
})
export class Ptmpage4Component implements OnInit {
  public products : any = [];
  public grandTotal !: number ;
  public shipfee !:number;
  constructor(private cartServices : CartService) { }

  ngOnInit(): void {
    this.cartServices.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.shipfee =this.cartServices.getTotalPrice() 
      this.grandTotal = this.shipfee + 4;
    })
  }

}
