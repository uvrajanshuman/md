import { SidenavComponent } from './sidenav/sidenav.component';
import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { NavbarComponent } from './navbar/navbar.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { LinkComponent } from './code-editor/link/link.component';
import { PopupGridComponent } from './code-editor/popup-grid/popup-grid.component';
import { MarkdownParserComponent } from './markdown-parser/markdown-parser.component';
import { HomeComponent } from './home/home.component';
import { GithubReadmeComponent } from './github-readme/github-readme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { EditorComponent } from './editor/editor.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CodeEditorComponent,
    LinkComponent,
    PopupGridComponent,
    MarkdownParserComponent,
    HomeComponent,
    GithubReadmeComponent,
    EditorComponent,
    FooterComponent,
    SidenavComponent,
    SidebarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    DragDropModule,
    MarkdownModule.forRoot(
      {
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: false,
          smartypants: false,
          xhtml: false,
        },
      },
      sanitize: SecurityContext.NONE
}
),
    MonacoEditorModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
  }
}
