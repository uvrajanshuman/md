import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {faArrowDown,faCheck,faX} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  iconDownload = faArrowDown;
  iconDownloaded = faCheck;
  iconClose = faX;
  
  download = true;
  downloaded = false;

  @Input()
  markdownString: string = '';

  @Output()
  closeDownloadTab:EventEmitter<boolean> = new EventEmitter();

  fileTitle: string = 'Untitled';

  constructor() { }

  ngOnInit(): void {
  }

  downloadFile(){
    const blob = new Blob([this.markdownString])
    const dlink = document.createElement('a')
    dlink.href = window.URL.createObjectURL(blob)
    dlink.download = this.fileTitle+'.md';
    dlink.click();
    dlink.remove();
  }

  close(){
    this.closeDownloadTab.emit(true);
  }
}
