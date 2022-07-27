import { navbarData } from '../sidebar/nav-data';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  iconBars = faBars;

  @Output()
  onToggleSideNav:EventEmitter<SideNavtoggle> = new EventEmitter();
  screenWidth = 0;

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  sidebarCollapsed:boolean = true;
  navData = navbarData;

  toggleCollapse(){
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.onToggleSideNav.emit({collapsed:this.sidebarCollapsed,screenWidth: this.screenWidth});
  }
 closeSidenav():void{
  this.sidebarCollapsed = false;
  this.onToggleSideNav.emit({collapsed:this.sidebarCollapsed,screenWidth: this.screenWidth});
 }
}

export interface SideNavtoggle{
  screenWidth: number;
  collapsed: boolean;
}