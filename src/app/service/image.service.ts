import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public imageItemList : any= [] 
  public shownList = new BehaviorSubject<any>([]);

  constructor() { }

  // images get by image click
  getProducts(){
    return this.shownList.asObservable();
   }
   setProduct(product : any) {
     this.imageItemList.push(...product);
     this.shownList.next(product);
 
   }

   showtoImg(product:any) {                 //this process will call through method where we need (i.e this is called in product.component.ts)
    this.imageItemList.push(product);
    this.shownList.next(this.imageItemList);
    console.log(this.imageItemList);
  }

    // images get by image click
}
