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
  elem: any;
  constructor(public sanitizer: DomSanitizer) { 
    this.frames = 1;
    // this.background = this.sanitizer.bypassSecurityTrustStyle(`url('../../assets/images/test/table_test-`+this.frames+`.png')`)
  }

  ngOnInit() {
    //setInterval will start the animation
    setInterval(() => {
      if (this.frames === 80) {
        this.frames = 1
      } else {
        this.frames ++

      }
    }, 40)
  }

  renderCode() {
    console.log('render code popup')
  }

  renderProjects() {
    console.log('render projects popup')
  }

  renderAboutMe() {
    console.log('About me render')
  }

}
