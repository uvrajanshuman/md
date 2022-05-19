import { sectionTemplates, SectionTemplate } from './section-template';
import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import {faGripLinesVertical, faLayerGroup} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-github-readme',
  templateUrl: './github-readme.component.html',
  styleUrls: ['./github-readme.component.css']
})
export class GithubReadmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //icons
  iconGrip = faGripLinesVertical;
  iconSections = faLayerGroup;

  allSections : SectionTemplate[] = sectionTemplates;
  selectedSections : SectionTemplate[] = [];

  entireMarkup: string = '';
  currentMarkup: string = '';

  sidebarCollapsed:boolean = false;

  toggleSidebarCollapse(){
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  drop(event: CdkDragDrop<SectionTemplate[]>) {
    if (event.previousContainer === event.container) {
      console.log('dropped Event', `> dropped '${event.item.data}' into '${event.container.id}'`);
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log('dropped Event', `> dropped '${event.item.data}' into '${event.container.id}'`);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

  }
}
