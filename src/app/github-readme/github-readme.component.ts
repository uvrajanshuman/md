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
   //icons
   iconGrip = faGripLinesVertical;
   iconSections = faLayerGroup;
   iconGripDots = faGripVertical;
   iconReset = faRotate;

  constructor() {}

  ngOnInit(): void {}

  allSections : SectionTemplate[] = [...sectionTemplates];
  selectedSections : SectionTemplate[] = [];

  // to maintain index of currently active section.
  activeSectionIndex!: number;
  // maintains currently active section.
  activeSection!: SectionTemplate;
  // cumulative markup of all sections.
  entireMarkup: string = '';


  //drop event
  drop(event: CdkDragDrop<SectionTemplate[]>) {
    //dropped in same container.
    if (event.previousContainer === event.container) {
      console.log("Shuffule within container");
      let sectionReshuffuled : boolean = true;
      if(event.previousIndex === event.currentIndex){
        sectionReshuffuled = false
      }
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if(event.container.id === 'cdk-drop-list-1' && sectionReshuffuled){
        this.findActiveIndex();
        this.makeSectionActive(this.activeSectionIndex);
        this.generateEntireMarkup();
      }
    } else {
      console.log("shuffule across container");
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      //by default first item of selected section is active
      if(event.container.id === 'cdk-drop-list-1' && this.selectedSections.length ==1){
        this.makeSectionActive(0);
        // this.generatePlaceholderMarkup();
      }
      //if selected section becomes empty reset the current markup
      this.generateEntireMarkup();
      
      
    }
  }

  makeSectionActive(index: number){
    const activeSection = this.selectedSections[index];
    this.activeSection = activeSection;
    this.activeSectionIndex = index;
  }

  findActiveIndex(){
    this.selectedSections.forEach((element, index)=>{
      if(element.id === this.activeSection.id){
        this.activeSectionIndex = index;
      }
    });
  }

  generateEntireMarkup(){
    console.log("Regenerating entire markup");
    console.log(this.activeSectionIndex);
    this.nullifyOnSectionShuffle();
    this.entireMarkup = '';
    for (let section of this.selectedSections){
      this.entireMarkup = this.entireMarkup+section.markdown;
    }
  }

  prefixMarkup:string|null = null;
  suffixMarkup:string|null = null;
  generatePlaceholderMarkup(){
    this.entireMarkup = '';
    if(this.prefixMarkup == null){
      this.prefixMarkup = '';
      for(var i =0; i<this.activeSectionIndex; i++){
        this.prefixMarkup+=this.selectedSections[i].markdown;
      }
    }
    if(this.suffixMarkup == null){
      this.suffixMarkup = '';
      for(var i =this.activeSectionIndex+1; i<this.selectedSections.length; i++){
        this.suffixMarkup+=this.selectedSections[i].markdown;
      }
    }

    this.entireMarkup = this.prefixMarkup+this.activeSection.markdown+this.suffixMarkup;
  }

  nullifyOnSectionShuffle(){
    this.prefixMarkup = null;
    this.suffixMarkup = null;
  }
  
  //section priview toggle
  sectionPreview:boolean = true;
  togglePreview(){
    this.sectionPreview = !this.sectionPreview;
    console.log(this.sectionPreview);
  }
  // sidebar collapse toggle.

  sidebarCollapsed:boolean = false;

  toggleSidebarCollapse(){
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
