import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnInit, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService{

  darkMode!: string | null; 
  theme!: Theme;
  darkModeActive!:boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document) {}

  // to initialize theme on startup. 
  initializeTheme(){
    this.syncThemeUpdate();
    this.document.body.classList.add(this.theme);
    if (this.darkMode === 'enabled') {
      localStorage.setItem('darkMode', 'enabled');
    } else {  
      localStorage.setItem('darkMode', 'disabled');
    }
    this.syncThemeUpdate();
    // this.renderer.addClass(this.document.body, this.theme);
  }

  // to switch between themes.
  switchTheme() {
    // this.darkMode = localStorage.getItem('darkMode'); 
    this.document.body.classList.replace(
      this.theme,
      this.darkMode === 'enabled'
        ? (this.theme = 'light-theme')
        : (this.theme = 'dark-theme')
    );

    if (this.darkMode !== 'enabled') {
      localStorage.setItem('darkMode', 'enabled');
    } else {  
      localStorage.setItem('darkMode', 'disabled');
    }

    this.syncThemeUpdate();
  }
  
  syncThemeUpdate(){
    this.darkMode = localStorage.getItem('darkMode'); 
    this.theme= this.darkMode === 'enabled' ? 'dark-theme': 'light-theme';
    this.darkModeActive = this.darkMode === 'enabled'? true : false;
    console.log("here: "+this.darkMode)
    console.log("here: "+this.darkModeActive)
  }

}

export type Theme = 'light-theme' | 'dark-theme';