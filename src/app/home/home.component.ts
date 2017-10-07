import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  frames: any;
  background: any;
  elem: any;
  progressBar: any;
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  controller: any;

  constructor(public sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': 0,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 300,
          desity: {
            enable: true,
            value_area: 500
          }
        },
        color: {
          value: '#EBA7BE'
        },
        shape: {
          type: 'circle',
        },
        polygon: {
          nb_sides: 5
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          enable: false
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false
            },
          }
        },
        retina_detect: true
      }
    };
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
