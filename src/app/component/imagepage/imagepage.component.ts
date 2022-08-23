import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-imagepage',
  templateUrl: './imagepage.component.html',
  styleUrls: ['./imagepage.component.css']
})
export class ImagepageComponent implements OnInit {
     public showed : any = [] ;
  constructor( private imgService:ImageService, private cartService : CartService,) { }

  ngOnInit(): void {
    this.imgService.getProducts()
    .subscribe(res=>{
      this.showed = res;
      
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
}

inc(item:any){

  this.cartService.inc(item);
  

}

dec(item:any){

this.cartService.dec(item);

}


}
