import { Component, OnInit } from '@angular/core';
import { SideNavtoggle } from '../sidebar/sidebar.component';
import {faHashtag,faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  iconEditor = faHashtag;
  iconPreview = faEye;

  currentMarkup: string = '';
  isSideNavCollapsed = true;
  editorActive = true;
  previewerActive = true;
  downloadActive = false;

  sectionAvailable = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavtoggle){
    this.isSideNavCollapsed = data.collapsed;
    this.editorActive = data.editorActive;
    this.previewerActive = data.previewerActive;
    this.downloadActive = data.downloadActive;
  }
  
  closeEditor(data:boolean){
    console.log("hi "+data);
    this.editorActive = !data;
  }

  closePreview(data:boolean){
    this.previewerActive = !data;
  }

  closeDownload(data:boolean){
    this.downloadActive = !data;
  }
}
