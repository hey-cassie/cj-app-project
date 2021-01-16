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
      description: 'I like to draw my pup! Test test test!'
    },
    {
      icon: 'assets/images/registration.svg',
      title: 'Graphic Design',
      description: 'Test test test!'
    },
    {
      icon: 'assets/images/ufo.svg',
      title: 'Front End Web Development',
      description: 'Still brand new to this, but having a blast learning!'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
