import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

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
