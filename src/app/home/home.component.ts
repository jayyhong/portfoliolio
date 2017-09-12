import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  frames: any;
  background: any;
  constructor(public sanitizer: DomSanitizer) { 
    this.frames = 1;
    // this.background = this.sanitizer.bypassSecurityTrustStyle(`url('../../assets/images/test/table_test-`+this.frames+`.png')`)
  }

  ngOnInit() {
    setInterval(() => {
      if (this.frames === 80) {
        this.frames = 1
      } else {
        this.frames ++

      }
    }, 40)
  }

  renderAbout() {
    console.log('render about')
  }

}
