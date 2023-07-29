import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor() { }
card:any=[];
  ngOnInit(): void {

    this.card=[
      {techername:'حادی موسوی',coursename:'تفکروطراحی',highestscore:35,Description:'کارآفرینی موضوعیه که از اواخر قرن بیستم مورد توجه قرارگرفته'},
      {techername:'حادی موسوی',coursename:'تفکروطراحی',highestscore:35,Description:'کارآفرینی موضوعیه که از اواخر قرن بیستم مورد توجه قرارگرفته'},
      {techername:'حادی موسوی',coursename:'تفکروطراحی',highestscore:35,Description:'کارآفرینی موضوعیه که از اواخر قرن بیستم مورد توجه قرارگرفته'},
      {techername:'حادی موسوی',coursename:'تفکروطراحی',highestscore:35,Description:'کارآفرینی موضوعیه که از اواخر قرن بیستم مورد توجه قرارگرفته'},
    ]
  }
  logg(){
    console.log(window.location.hostname);
    
  }



}

