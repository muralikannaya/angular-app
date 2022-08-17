import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public totalItem : number = 0;
  public searchTerm : string = '';
  constructor(private cartService : CartService, private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
     this.totalItem = res.length;
    })
  }
   
  search(event:any) {
    this.searchTerm = (event.target as HTMLInputElement).value;  
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm); // send the input data to cartservice 
    this.router.navigate(['products']);
  }

}
