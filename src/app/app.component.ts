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
         this.islogin=event.url
         let url = location.pathname;
         if(url.startsWith('/') || url.startsWith('/login')){
          this.hasLogin = false;
         }
         else{
          this.hasLogin = true;

         }
      }
   })
   
  }
 
}