import { DarkmodeService } from './../darkmode.service';
import { Component, OnInit } from '@angular/core';
import {
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  darkMode!:boolean; 
 // Icons Declaration
 iconSun = faSun;
 iconMoon = faMoon;
 
  constructor(private darkModeService: DarkmodeService) { }

  ngOnInit(): void {
    this.darkMode = this.darkModeService.darkModeActive;
    console.log("nav: "+this.darkMode)
  }

 

  toggleDarkMode(){
    this.darkModeService.switchTheme();
    this.darkMode = this.darkModeService.darkModeActive;
  }

}
