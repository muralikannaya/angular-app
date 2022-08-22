import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ptmpage3',
  templateUrl: './ptmpage3.component.html',
  styleUrls: ['./ptmpage3.component.css']
})
export class Ptmpage3Component implements OnInit {

  constructor() { }
  public cardThing: boolean = false ;
  public upiThing: boolean = false ;

  ngOnInit(): void {
  }


  atmCard() {
    this.cardThing = true;
    this.upiThing = false;
  }

  upiOpen() {
    this.cardThing = false;
    this.upiThing = true;
  }
}
