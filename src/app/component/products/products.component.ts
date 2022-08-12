import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   public productList :any ;
   public filterCategory : any ;
    searchKey:string = "";
  constructor(private api : ApiService, private cartService : CartService) { }           // here inject services

  ngOnInit(): void {                    
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
  }

  filter(category:string) {                               // fiter the items by clicking category buttons
    this.filterCategory = this.productList
    .filter((a:any)=>{
        if(a.category == category || category == ''){
          return a;
        }
    })
  }

}
