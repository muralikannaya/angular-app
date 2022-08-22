import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any= []         // items push to this storage when click add to cart button 
  public productList = new BehaviorSubject<any>([]);      // this is for number items in cart after click add to cart
  public search = new BehaviorSubject<string>("");  /* ( this behaviour is both observable and emmitable it) this  is for seaching 
   string value is get from header input and  pass the value into products component to filter */

  constructor() { }
  getProducts(){
   return this.productList.asObservable();
  }
  setProduct(product : any) {
    this.cartItemList.push(...product);
    this.productList.next(product);

  }

  addtoCart(product:any) {                 //this process will call through method where we need (i.e this is called in product.component.ts)
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number {
    let grandTotal = 0 ;

    this.cartItemList.map((a:any)=>{
      grandTotal += a.total ;
    })
    return grandTotal;
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);   // when remove item the number on the cart (no of items decrease)
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  inc(item:any){

    // console.log(item);
    
    item.quantity+=1;
    
    }
    
    dec(item:any) {
    
      if(item.quantity!=1){  // console.log(item);
    
    item.quantity-=1;
    
    }
  }
}   
