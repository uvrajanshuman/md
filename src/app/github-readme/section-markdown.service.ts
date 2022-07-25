import { SectionTemplate } from './section-template';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionMarkdownService {

  constructor() { }

  private prefixMarkup: string|null = null;
  private suffixMarkup: string|null = null;
  generateMarkup(selectedSections:SectionTemplate[], activeIndex:number, sectionShuffle:boolean):string{

    if(sectionShuffle){
      this.nullifyOnSectionShuffle();
    }

    if(this.prefixMarkup === null){
      this.prefixMarkup = '';
      for(var i = 0; i < activeIndex; i++){
        this.prefixMarkup += selectedSections[i].markdown;
      }
    }

    if(this.suffixMarkup === null){
      this.suffixMarkup = '';
      for(var i = activeIndex+1; i < selectedSections.length; i++){
        this.suffixMarkup += selectedSections[i].markdown;
      }
    }

    return this.prefixMarkup+selectedSections[activeIndex].markdown+this.suffixMarkup;
  }

  nullifyOnSectionShuffle(){
    this.prefixMarkup = null;
    this.suffixMarkup = null;
  }

}
