import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-preview',
  templateUrl: './edit-preview.component.html',
  styleUrls: ['./edit-preview.component.css']
})
export class EditPreviewComponent implements OnInit {

  markdown:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
