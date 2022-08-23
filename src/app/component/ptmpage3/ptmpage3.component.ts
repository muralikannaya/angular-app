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
  public netThing: boolean = false ;
  public enterOtp : boolean = false;
  public cardOtp : boolean = false;

  ngOnInit(): void {
  }
  cardOtpOpen() {
    this.cardOtp = true;
  }

  atmCard() {
    this.cardThing = true;
    this.upiThing = false;
    this.netThing = false;
  }

  upiOpen() {
    this.cardThing = false;
    this.upiThing = true;
    this.netThing = false;
  }

  netOpen() {
    this.cardThing = false;
    this.netThing = true;
    this.upiThing = false;
  }

  getOtp () {
    this.enterOtp = true;
  }
}
