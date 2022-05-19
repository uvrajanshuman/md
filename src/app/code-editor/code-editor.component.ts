import { ToolbarService } from './toolbar.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OPERATORS } from './DecoratorTemplate'
import {
  faSun,
  faMoon,
  faX
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {

  Operators = OPERATORS;
  // Icons Declaration
  iconSun = faSun;
  iconMoon = faMoon;
  iconCancel = faX

  editor: any;
  editorOptions = {
    theme: 'vs-dark', language: 'markdown', 
    automaticLayout: true, scrollBeyondLastLine: false, wordWrap: 'on', minimap: {
      enabled: false
    }, lineNumbers: 'off'
  };
  @Input('code')
  code!: string;

  @Input('markup')
  markup: string = '';

  @Output()
  codeChange = new EventEmitter<string>();

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit(): void {
  }

  onInit(editor: any) {
    let line = editor.getPosition();
    console.log(line);
    this.editor = editor
  }

  getMarkup(operator: string) {
    console.log(operator)
    if (operator === 'link' || operator === 'image' || operator === 'htmlEntity' 
        || operator === 'emoji') {
      this.openPopup();
      this.popupHeading = operator.toUpperCase();
      this.popupOperator = operator;
    } else {
      this.toolbarService.generateMarkup(this.editor, operator);
    }

  }

  toggleEditorTheme() {
    const currentTheme: string = this.editorOptions.theme;
    const newTheme: string = currentTheme === 'vs-dark' ? 'vs-light' : 'vs-dark';
    this.editorOptions = { ...this.editorOptions, theme: newTheme };
  }

  popupOpen: boolean = false;
  popupHeading: string = '';
  popupOperator: string = '';
  openPopup() {
    this.popupOpen = true;
  }
  closePopup() {
    this.popupOpen = false;
    console.log(this.popupOpen)
  }
  submitFromPopup(link: string) {
    this.toolbarService.generateMarkup(this.editor, this.popupOperator, link);
    console.log("hello"+link)
    this.closePopup();
    this.popupHeading = '';
    this.popupOperator = '';
  }

  sectionPreview:boolean = true;
  togglePreview(){
    this.sectionPreview = !this.sectionPreview;
    console.log(this.sectionPreview);
  }

  onCodeChange(value: string){
    this.codeChange.emit(value);
  }
}
