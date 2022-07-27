import { navbarData } from './nav-data';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBars, faX, faFileLines, faPenToSquare, faCircleDown, faBook, faSun, faMoon, faCircleHalfStroke, faLayerGroup, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faFile, faEye } from '@fortawesome/free-regular-svg-icons';


import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  iconMenuExpanded = faX;
  iconMenuCollapse = faBars;
  iconEditor = faFile;
  iconPreview = faEye;
  iconSection = faLayerGroup;
  iconDownload = faDownload;


  iconGitHubEditor = faPenToSquare;
  // iconDownload = faCircleDown;
  iconDocs = faBook;
  iconGitHub = faGithub;
  iconSun = faSun;
  iconMoon = faMoon;
  iconMode = faCircleHalfStroke
  darkMode!: boolean;

  @Input()
  sectionAvailable:boolean = true;

  @Input()
  editorActive!:boolean;
  @Input()
  previewerActive!:boolean;
  @Input()
  sectionActive!:boolean;
  @Input()
  downloadActive!:boolean;

  @Output()
  onToggleSideNav:EventEmitter<SideNavtoggle> = new EventEmitter();

  constructor(private darkModeService: DarkmodeService) { }

  ngOnInit(): void {
    this.darkMode = this.darkModeService.darkModeActive;
    console.log("nav: " + this.darkMode);
  }

  // sidebarCollapsed:boolean = true;
  // @Output()
  // onToggleSideNav:EventEmitter<SideNavtoggle> = new EventEmitter();

  // toggleSidebar(){
  //   let sidebar = document.querySelector(".sidebar");
  //   sidebar?.classList.toggle("active");
  //   let sidebarContainer = document.querySelector(".sidebar-container");
  //   sidebarContainer?.classList.toggle("active");
  // }

  //   toggleSidebar(){
  //     this.sidebarCollapsed = !this.sidebarCollapsed;
  //     this.onToggleSideNav.emit({collapsed:this.sidebarCollapsed});
  //   }

  //   closeSidebar():void{
  //   this.sidebarCollapsed = false;
  //   this.onToggleSideNav.emit({collapsed:this.sidebarCollapsed});
  //  }

  //   toggleDarkMode(){
  //     this.darkModeService.switchTheme();
  //     this.darkMode = this.darkModeService.darkModeActive;
  //   }

  toggleEditor(): void {
    this.editorActive = !this.editorActive;
    this.emit();
  }

  togglePreviewer(): void {
    this.previewerActive = !this.previewerActive;
    this.emit();
  }

  toggleSections(): void {
    this.sectionActive = !this.sectionActive;
    this.emit();
  }

  toggleDownload(): void {
    this.downloadActive = !this.downloadActive;
    this.emit();
  }

  emit(){
    this.onToggleSideNav.emit({
      editorActive: this.editorActive,
      previewerActive: this.previewerActive,
      sectionActive: this.sectionActive,
      downloadActive: this.downloadActive,
      collapsed:false});
  }
  
}

export interface SideNavtoggle {
  editorActive: boolean;
  previewerActive: boolean;
  sectionActive: boolean;
  downloadActive: boolean;
  collapsed: boolean;
}