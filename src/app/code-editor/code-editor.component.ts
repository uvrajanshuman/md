import { ToolbarService } from './toolbar.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OPERATORS } from './DecoratorTemplate'
import {
  faBold,
  faItalic,
  faStrikethrough,
  faQuoteLeft,
  faListUl,
  faListOl,
  faListCheck,
  faTable,
  faLink,
  faImage,
  faCode,
  faMinus,
  faFaceSmileBeam,
  faCopyright,
  faHeading,
  faSun,
  faMoon,
  faX
} from '@fortawesome/free-solid-svg-icons'
import { Range } from 'monaco-editor';
import { OPERATIONS } from './OperationDecortorMap';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {

  Operators = OPERATORS;
  // Icons Declaration
  iconBold = faBold;
  iconItalic = faItalic;
  iconStrikethrough = faStrikethrough;
  iconHorizontalRule = faMinus;
  iconHeading = faHeading;
  iconListUl = faListUl;
  iconListOl = faListOl;
  iconCheckList = faListCheck;
  iconBlockQuote = faQuoteLeft;
  iconTable = faTable;
  iconLink = faLink;
  iconImage = faImage;
  iconCode = faCode;
  iconHtmlEntity = faCopyright;
  iconEmoji = faFaceSmileBeam;
  iconSun = faSun;
  iconMoon = faMoon;
  iconCancel = faX

  editor: any;
  editorOptions = {
    theme: 'vs-dark', language: 'markdown', scrollBeyondLastLine: false, wordWrap: 'on', minimap: {
      enabled: false
    }, lineNumbers: 'off'
  };
  @Input('code')
  code!: string;
  @Output()
  codeChange = new EventEmitter<string>();

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit(): void {
  }

  onInit(editor: any) {
    let line = editor.getPosition();
    console.log(line);
    this.editor = editor

    // this.editor.onDidChangeModelContent(() => {
    //   const content = this.editor.getModel().getValue();
    //   console.log(content);
    //   this.codeChange.emit(content);
    // });
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

  bolder() {
    let line = this.editor.getPosition();
    console.log(line);

    // console.log(this.editor.getLine())
    var selection = this.editor.getSelection();
    console.log(selection);
    console.log(this.editor.getModel().getValueInRange(selection));
    console.log(selection.isEmpty())
    var id = { major: 1, minor: 1 };
    var text = "XXXXX";
    var op = { identifier: id, range: selection, text: text, forceMoveMarkers: true };
    this.editor.executeEdits("my-source", [op]);
    // this.editor.revealLine(line.lineNumber);
    // this.editor.revealRange(new Range(line.lineNumber,line.column,line.lineNumber, line.column+text.length),0)
    // this.editor.setSelection(new Range(selection.startLineNumber,selection.endColumn,selection.startLineNumber,text.length));
    this.editor.setSelection(new Range(selection.startLineNumber, selection.startColumn, selection.startLineNumber, selection.startColumn + text.length));
    // this.editor.setSelection(selection);
    this.editor.focus();
    console.log(this.editor.getEditorType());
    console.log(this.editor.getTheme());
  }

  /*
  endColumn: 14
endLineNumber: 5
positionColumn: 9
positionLineNumber: 5
selectionStartColumn: 14
selectionStartLineNumber: 5
startColumn: 9
startLineNumber: 5
  */

  bold() {
    this.toolbarService.replaceText(this.editor, OPERATIONS.BOLD);
  }
  italic() {
    this.toolbarService.replaceText(this.editor, OPERATIONS.ITALIC);
  }
  strikeThrough() {
    this.toolbarService.replaceText(this.editor, OPERATIONS.STRIKETHROUGH);
  }
  horizontalRule() {
    this.toolbarService.replaceText(this.editor, OPERATIONS.STRIKETHROUGH);
  }
  insertHeading() { }
  ul() {
    this.toolbarService.replaceText(this.editor, OPERATIONS.UNORDEREDLIST);
  }
  ol() {
    this.toolbarService.replaceText(this.editor, OPERATIONS.ORDEREDLIST);
  }
  checkList() {
    this.toolbarService.replaceText(this.editor, OPERATIONS.CHECKLIST);
  }
  blockQuote() {
    this.toolbarService.replaceText(this.editor, OPERATIONS.BLOCKQUOTE);
  }
  table() {
    this.toolbarService.replaceText(this.editor, OPERATIONS.TABLE);
  }
  link() {
    this.toolbarService.replaceText(this.editor, OPERATIONS.LINK);
  }
  image() {
    this.toolbarService.replaceText(this.editor, OPERATIONS.IMAGE);
  }
  insertCode() {
    this.toolbarService.replaceText(this.editor, OPERATIONS.CODE);
  }
  insertHtmlEntity() {

  }
  insertEmoji() { }


  toggleEditorTheme() {
    const currentTheme: string = this.editorOptions.theme;
    const newTheme: string = currentTheme === 'vs-dark' ? 'vs-light' : 'vs-dark';
    this.editorOptions = { ...this.editorOptions, theme: newTheme };
  }

  headerToggle = false;
  dropdownToggle() {
    this.headerToggle = !this.headerToggle;
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

}
