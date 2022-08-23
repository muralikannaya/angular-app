import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-ptmpage1',
  templateUrl: './ptmpage1.component.html',
  styleUrls: ['./ptmpage1.component.css']
})
export class Ptmpage1Component implements OnInit {
  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router:Router, private imgService:ImageService) { }

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

  //  next() {
  //   this.imgService.next();
  //  }
}



