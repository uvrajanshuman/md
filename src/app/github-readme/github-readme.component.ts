import { sectionTemplates, SectionTemplate } from './section-template';
import { Component, Input, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import {faGripLinesVertical, faGripVertical,faLayerGroup, faRotate} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-github-readme',
  templateUrl: './github-readme.component.html',
  styleUrls: ['./github-readme.component.css']
})
export class GithubReadmeComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }

  //icons
  iconGrip = faGripLinesVertical;
  iconSections = faLayerGroup;
  iconGripDots = faGripVertical;
  iconReset = faRotate;

  allSections : SectionTemplate[] = [...sectionTemplates];
  selectedSections : SectionTemplate[] = [];

  activeSectionIndex!: number;

  activeSection!: SectionTemplate;

  entireMarkup: string = '';
  _currentMarkup: string = '';


  get currentMarkup():string{
    return this._currentMarkup;
  }

  set currentMarkup(newString: string){
    this._currentMarkup = newString;
    // console.log(this.selectedSections);
    // this.selectedSections[this.activeSectionIndex].markdown = newString;
    console.log(this.selectedSections[this.activeSectionIndex]);
    // this.selectedSections[this.activeSectionIndex]['markdown'] = newString;
    this.generateEntireMarkup();
  }

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
      if(event.container.id === 'cdk-drop-list-1'){
        this.generateEntireMarkup();
      }
    } else {
      console.log('dropped Event', `> dropped '${event.item.data}' into '${event.container.id}'`);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if(event.container.id === 'cdk-drop-list-1' && this.selectedSections.length ==1){
        this.makeSectionActive(0);
      }
    }
    this.generateEntireMarkup();
  }

  sectionPreview:boolean = true;
  togglePreview(){
    this.sectionPreview = !this.sectionPreview;
    console.log(this.sectionPreview);
  }

  makeSectionActive(index: number){
    const activeSection = this.selectedSections[index];
    this.currentMarkup = activeSection.markdown;
    this.activeSection = activeSection;
    this.activeSectionIndex = index;
  }


  generateEntireMarkup(){
    console.log("Regenerating entire markup");
    console.log(this.activeSectionIndex);
    this.entireMarkup = '';
    for (let section of this.selectedSections){
      this.entireMarkup = this.entireMarkup+section.markdown;
    }
  }
}
