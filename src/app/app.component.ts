import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { NavigationStart } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  result: boolean=false; 
  islogin:any;
  hasLogin : boolean = false;
  event:any
  name:any
  routerChangeMethod: any;
  constructor(public router: Router) {}
  ngOnInit() {
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationStart){
                let url = location.pathname;
let curenturl=event.url.split('/')
console.log(curenturl[1]);

         if(curenturl[1]==""){
          this.hasLogin = false;
         }
         else{
          this.hasLogin=true;
         }
      }
   })
   
  }
 
}