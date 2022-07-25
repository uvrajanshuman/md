import { Component, OnInit } from '@angular/core';
import {faBars,faX,faFileLines,faPenToSquare,faCircleDown,faBook,faSun,faMoon, faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  iconMenuExpanded = faX;
  iconMenuCollapse = faBars;
  iconEditor = faFileLines;
  iconGitHubEditor = faPenToSquare;
  iconDownload = faCircleDown;
  iconDocs = faBook;
  iconGitHub = faGithub;
  iconSun = faSun;
  iconMoon = faMoon;
  iconMode = faCircleHalfStroke
  darkMode!:boolean; 
  constructor(private darkModeService: DarkmodeService) { }

  ngOnInit(): void {
    this.darkMode = this.darkModeService.darkModeActive;
    console.log("nav: "+this.darkMode)
  }

  sidebarCollapsed:boolean = true;

  toggleSidebar(){
    let sidebar = document.querySelector(".sidebar");
    sidebar?.classList.toggle("active");
    let sidebarContainer = document.querySelector(".sidebar-container");
    sidebarContainer?.classList.toggle("active");
  }

  toggleDarkMode(){
    this.darkModeService.switchTheme();
    this.darkMode = this.darkModeService.darkModeActive;
  }
}
