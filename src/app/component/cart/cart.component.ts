import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   public products : any = [];
   public grandTotal !: number ;
  constructor(private cartServices : CartService) { }

  ngOnInit(): void {
    this.cartServices.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartServices.getTotalPrice();
    })
  }
 
  removeItem(item:any){
    this.cartServices.removeCartItem(item);

  }
  
  emptycart() {
    this.cartServices.removeAllCart();
  }

  inc(item:any){

    this.cartServices.inc(item);
    
  
  }
  
  dec(item:any){
  
  this.cartServices.dec(item);
  
  }
}
