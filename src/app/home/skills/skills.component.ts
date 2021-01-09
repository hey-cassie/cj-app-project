import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  illustration = 'I like drawing my dog. I also love drawing test test test test test';
  graphicDesign = 'Whatever you need, I can do, test test test test test';
  webDev = 'Brand new to this, but having a blast learning! test test test test test'

  constructor() { }

  ngOnInit(): void {
  }

}
