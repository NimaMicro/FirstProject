import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
disable:boolean=false
  constructor() { }
  ngOnInit(): void {
    
  }

  showSide(){
    switch (this.disable){
      case false:
        this.disable=true
        break;
        case true:
          this.disable=false
          break
    }
      }
}
