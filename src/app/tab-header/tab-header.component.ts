import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {faHashtag,faX} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css']
})
export class TabHeaderComponent implements OnInit {

  iconTab = faHashtag;
  iconCancel = faX;
  @Input()
  tabActive = true;

  @Input()
  icon = faHashtag;

  @Input()
  tabLabel:string = 'Editor';

  @Output()
  closeTab:EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  tabToggle(){
    console.log("Close");
    this.closeTab.emit(true);
  }
}
