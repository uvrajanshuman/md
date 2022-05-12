import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown-parser',
  templateUrl: './markdown-parser.component.html',
  styleUrls: ['./markdown-parser.component.css']
})
export class MarkdownParserComponent implements OnInit {

  @Input()
  code!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
