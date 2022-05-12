import { emojiUtil } from './../EmojiUtil';
import { htmlEntityUtil } from './../HtmlEntityUtil';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-grid',
  templateUrl: './popup-grid.component.html',
  styleUrls: ['./popup-grid.component.css']
})
export class PopupGridComponent implements OnInit {

  htmlEntities =htmlEntityUtil;
  emojis = emojiUtil;
  icons:any

  @Input()
  operator!: string;
  
  @Output()
  outputSymbol = new EventEmitter<string>();

  constructor() { }

  @Output()
  closePopup = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.icons = this.operator == 'emoji' ? this.emojis : this.htmlEntities;
  }

  submit(symbol:string){
    console.log("here")
    console.log(symbol);
    this.outputSymbol.emit(symbol);
    console.log("bye: "+symbol);
  }

}
