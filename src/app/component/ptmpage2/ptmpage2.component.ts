import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ptmpage2',
  templateUrl: './ptmpage2.component.html',
  styleUrls: ['./ptmpage2.component.css']
})
export class Ptmpage2Component implements OnInit {
  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router:Router) { }
public one:boolean =true;
public two:boolean = false;
 public three:boolean = false;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
     const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
     });
     if(user){
      alert("Login Success");
      this.loginForm.reset();
      this.router.navigate(['products'])
     } else {
      alert("user not found")
     }
    })
   }

myOpen1() {
this.one = false;
this.two = true;
}

myOpen2() {
  this.two = false;
   this.three = true;
}

}



