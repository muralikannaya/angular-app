import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-slidecart',
  templateUrl: './slidecart.component.html',
  styleUrls: ['./slidecart.component.css']
})
export class SlidecartComponent implements OnInit {
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
