import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
   heading:string='3RI'
   name="abhishek"
   myvar=true;
  constructor() { 
    alert("constructor")
  }
  login(){

    alert("loged in")
  }
  ngOnInit() {
    alert("ngOnInit")
  }

}
