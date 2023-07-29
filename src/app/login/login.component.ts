import { Component, Input, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public router:Router) {  }

  islogin:any;
  @Output() result:boolean=false;
  ngOnInit(): void {
  }
  course(){
    this.router.navigate(['customers'])
  //   else{
  // this.result=true
  // console.log(this.result);
  //   }
    
  }
}
