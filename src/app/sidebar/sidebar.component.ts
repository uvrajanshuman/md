import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  iconBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarCollapsed:boolean = true;

  sidebarCollapse(){
    let sidebar = document.querySelector(".sidebar");
    sidebar?.classList.toggle("active");
  }
}
