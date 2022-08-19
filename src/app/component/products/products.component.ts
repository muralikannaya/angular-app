import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   public productList :any ;
   public filterCategory : any ;
   public totalItem : number = 0;
   public cartMoveStyle : any ;
    searchKey:string = "";
  constructor(private api : ApiService, private cartService : CartService, private router:Router, private imgService:ImageService) { }           // here inject services

  ngOnInit(): void { 
    this.cartMoveStyle = 'cartSideStyle';
    this.cartService.getProducts()
    .subscribe(res=>{
     this.totalItem = res.length;
    
    
    }) 
    
    // this.cartMoveStyle = 'cartSideStyle';
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //  this.cartMoveStyle = 'moveStyle';
    // })  
    this.api.getProduct()                   // method calling to items
    .subscribe(res=>{                     
      this.productList = res;           //storing the calling items
       this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category=== "women's clothing" || a.category=== "men's clothing"){
          a.category = "fashion";
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    })

    this.cartService.search.subscribe((val:any)=>{              
      this.searchKey = val;                                      // here search is the  behaviour in cartService to get  the value what cartService sends trough service varible
    })
  }
   
  addtocart(item: any){
          this.cartService.addtoCart(item);
          // this.cartMoveStyle = 'moveStyle'?  'moveStyle': 'cartSideStyle';
          if (this.cartMoveStyle == 'cartSideStyle'){
            this.cartMoveStyle = 'moveStyle';
          } else {
            this.cartMoveStyle = 'cartSideStyle';
          }

  }

  showtoImg(item: any){
    this.imgService.showtoImg(item);
  }

  filter(category:string) {                               // fiter the items by clicking category buttons
    this.filterCategory = this.productList
    .filter((a:any)=>{
        if(a.category == category || category == ''){
          return a;
        }
    })
  }
  
  iconStyle = 'normalStyle';

  like () {
    this.iconStyle = 'likeStyle';
  }


}
