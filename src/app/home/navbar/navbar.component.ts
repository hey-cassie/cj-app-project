import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  about = 'about';
  getToWork = "let's get to work!";

  constructor() { }

  ngOnInit(): void {
  }

}
