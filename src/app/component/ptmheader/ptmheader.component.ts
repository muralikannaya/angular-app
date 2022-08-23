import { Component, OnInit } from '@angular/core';
// import { ImageService } from 'src/app/service/image.service';
@Component({
  selector: 'app-ptmheader',
  templateUrl: './ptmheader.component.html',
  styleUrls: ['./ptmheader.component.css']
})
export class PtmheaderComponent implements OnInit {
  // class: any;

  constructor() { }
  
  ngOnInit(): void {
    // return this.imgService.next()
    // .subscribe((res:any)=>{
    //   this.class = res;
    //   this.iconStyle = 'numberActive ';
    // })
  }
// iconStyle = 'number' ;
// next() {
//   this.iconStyle = 'numberActive ' ;
// }

}
