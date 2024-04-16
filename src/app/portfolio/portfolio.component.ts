import { Target } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  modelImg:string = '' ;
  flag:boolean = true ;
  srcs:string[] =[
    'assets/images/port1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
    'assets/images/port1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
  ]
  hideModel(element:EventTarget | null , img:HTMLImageElement):void
  {
    if(element == img) return;
    this.flag = true ;
  }
}
