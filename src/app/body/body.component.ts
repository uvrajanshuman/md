import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  collapsed = true;

  // @Input()
  // screenWidth = 0;

  getBodyClass():string{
    let styleClas = '';
    if(this.collapsed){
      styleClas = 'body-trimmed';
    }else{
      styleClas = 'body-md-screen';
    }
    return styleClas;
  }
}
