import { SideNavtoggle } from './sidebar/sidebar.component';
import { DarkmodeService } from './darkmode.service';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MDGenerator';
  darkModeActive! :boolean;
  constructor(private darkModeService:DarkmodeService){}
  ngOnInit(): void {
    this.darkModeService.initializeTheme();
    this.darkModeActive = this.darkModeService.darkModeActive;
    console.log("There: "+this.darkModeActive);
  }

  isSideNavCollapsed = true;
  editorActive = true;
  previewerActive = true;
  sectionActive = true;
  downloadActive = false;

  onToggleSideNav(data: SideNavtoggle){
    this.isSideNavCollapsed = data.collapsed;
    this.editorActive = data.editorActive;
    this.previewerActive = data.previewerActive;
    this.sectionActive = data.sectionActive;
    this.downloadActive = data.downloadActive;
  }
  
}
