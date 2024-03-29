import { SectionMarkdownService } from './section-markdown.service';
import { sectionTemplates, SectionTemplate } from './section-template';
import { Component, Input, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import {faGripLinesVertical, faGripVertical,faLayerGroup, faRotate, faUpDownLeftRight} from '@fortawesome/free-solid-svg-icons'

import {faHashtag,faEye} from '@fortawesome/free-solid-svg-icons';
import { SideNavtoggle } from '../sidebar/sidebar.component';

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
   iconMove = faUpDownLeftRight;


  iconEditor = faHashtag;
  iconPreview = faEye;

  currentMarkup: string = '';
  isSideNavCollapsed = true;
  editorActive = true;
  previewerActive = true;
  downloadActive = false;
  sectionActive = true;

  sectionAvailable = true;

  constructor(private markdownService:SectionMarkdownService) {}

  ngOnInit(): void {}

  onToggleSideNav(data: SideNavtoggle){
    this.isSideNavCollapsed = data.collapsed;
    this.editorActive = data.editorActive;
    this.previewerActive = data.previewerActive;
    this.downloadActive = data.downloadActive;
  }
  
  closeEditor(data:boolean){
    this.editorActive = !data;
  }

  closePreview(data:boolean){
    this.previewerActive = !data;
  }

  closeDownload(data:boolean){
    this.downloadActive = !data;
  }

  closeSection(data:boolean){
    this.sectionActive = !data;
  }


  allSections : SectionTemplate[] = [...sectionTemplates];
  selectedSections : SectionTemplate[] = [];

  // to maintain index of currently active section.
  activeSectionIndex!: number;
  // maintains currently active section.
  activeSection!: SectionTemplate;
  // cumulative markup of all sections.
  entireMarkup: string = '';
  //chage in selected sections
  sectionShuffled:boolean = false;

  //drop event
  drop(event: CdkDragDrop<SectionTemplate[]>) {
    //dropped in same container.
    if (event.previousContainer === event.container) {
      console.log("Shuffule within container");

      if((event.container.id === 'cdk-drop-list-1') 
      && (event.previousIndex !== event.currentIndex)){
        this.sectionShuffled = true;
      }

      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if(event.container.id === 'cdk-drop-list-1' && this.sectionShuffled){
        //update active index on shuffle
        this.findActiveIndex();
        //update activesectin on shuffle
        this.makeSectionActive(this.activeSectionIndex);
        this.generateEntireMarkup();
      }

    } else {
      console.log("shuffule across container");
      this.sectionShuffled = true;

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      //by default first item of selected section is active
      if(event.container.id === 'cdk-drop-list-1' && this.selectedSections.length ==1){
        this.makeSectionActive(0);
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
    // console.log("Regenerating entire markup");
    // console.log(this.activeSectionIndex);
    // this.entireMarkup = '';
    // for (let section of this.selectedSections){
    //   this.entireMarkup = this.entireMarkup+section.markdown;
    // }
    console.log((this.selectedSections,this.activeSectionIndex,this.sectionShuffled));
    this.entireMarkup = this.markdownService.generateMarkup(this.selectedSections,this.activeSectionIndex,this.sectionShuffled);
    this.sectionShuffled = false;
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
