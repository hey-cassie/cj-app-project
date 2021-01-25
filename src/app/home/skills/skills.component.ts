import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      icon: 'assets/images/huahua.svg',
      title: 'Illustration',
      description: 'I get a kick out of illustrating different aspects of my life with a quirky attention to detail and an often satirical bent. I especially enjoy drawing my dog.',
      toolTitle: '',
      toolText: ''
    },
    {
      icon: 'assets/images/registration.svg',
      title: 'Graphic Design',
      description: 'As a designer, I aim for minimal, thoughtful design with the right amount of personality and fun.'
    },
    {
      icon: 'assets/images/ufo.svg',
      title: 'Front End Web Development',
      description: 'I’m new to this, but the challenge of coding things from scratch and bringing my ideas to life in the browser is a blast!'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
