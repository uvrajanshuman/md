import { DecoratorTemplate, DecoratorTemplateMap } from './DecoratorTemplate';
import { OperationDecorationMap, OperatorDecorator } from './OperationDecortorMap';
import { Injectable } from '@angular/core';
import { Range } from 'monaco-editor';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor() { }

  generateMarkup(editor: any, operator: string, placeHolder?: string){
    const selection = editor.getSelection();
    const decoratorTemplate: DecoratorTemplate = {...DecoratorTemplateMap[operator]};
    if(!selection.isEmpty() && decoratorTemplate.placeHolder){
      if(placeHolder){
        decoratorTemplate.placeHolder = placeHolder;
      }
      else{
        decoratorTemplate.placeHolder = editor.getModel().getValueInRange(selection);
      }
    }
    if(placeHolder){
      decoratorTemplate.placeHolder = placeHolder;
    }
    const text = this.replacePlaceHolder(decoratorTemplate);
    console.log(text);
    var id = { major: 1, minor: 1 };
    var op = { identifier: id, range: selection, text: text, forceMoveMarkers: true };
    editor.executeEdits("my-source", [op]);
    this.resetSelection(editor,selection,text);
  }

  replacePlaceHolder(decoratorTemplate: DecoratorTemplate){
    if(decoratorTemplate.placeHolder)
      return decoratorTemplate.markdown(decoratorTemplate.placeHolder)
    return decoratorTemplate.markdown();
  }

  replaceText(editor: any, operation: string) {
    const selection = editor.getSelection();
    const operatorDecorator: OperatorDecorator = {...OperationDecorationMap[operation]};
    if (!selection.isEmpty()) {
      operatorDecorator.placeHolder = editor.getModel().getValueInRange(selection);
    }
    const text = this.getProcessedMarkup(operatorDecorator);
    var id = { major: 1, minor: 1 };
    var op = { identifier: id, range: selection, text: text, forceMoveMarkers: true };
    editor.executeEdits("my-source", [op]);
    this.resetSelection(editor,selection,text);
  }

  private getProcessedMarkup(operatorDecorator: OperatorDecorator): string {
    let text = operatorDecorator.prefixDecorator + operatorDecorator.placeHolder;
    console.log(text);
    if(operatorDecorator.postfixDecorator)
      text += operatorDecorator.postfixDecorator;
    return text;
  }

  private resetSelection(editor: any, selection: any, text: string){
      // TODO: manage for selections of multiple lines.
      editor.setSelection(new Range(selection.startLineNumber, selection.startColumn, selection.startLineNumber, selection.startColumn + text.length));
    editor.focus();
  }
}


/*

// replaces the text and setsSelection on the replaced text;
  replaceTet(editor: any) {
    var selection = editor.getSelection();
    if (!selection.isEmpty) {
      placeholder = editor.getModel().getValueInRange(selection);
    }
    var text = decorator + placeholder + decorator;
    var id = { major: 1, minor: 1 };
    var op = { identifier: id, range: selection, text: text, forceMoveMarkers: true };
    editor.executeEdits("my-source", [op]);
    editor.setSelection(new Range(selection.startLineNumber, selection.startColumn, selection.startLineNumber, selection.startColumn + text.length));
    editor.focus();
  }

*/


