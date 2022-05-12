import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Output()
  outputLink = new EventEmitter<string>();

  @Output()
  closePopup = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(form: NgForm){
    const link:string = form.value['link'];
    this.outputLink.emit(link);
  }

  cancel(){
    this.closePopup.emit(true);
  }
}
