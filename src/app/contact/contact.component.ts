import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('formLocalRef') contactForm: NgForm;

  submitted = false;
  userInput = {
    name: '',
    email: '',
    project: '',
    budget: '',
    deets: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  closeModal() {
    this.userInput.deets = '';
    document.getElementById("myModal").style.display = "none";
  }

  onSubmit(contactForm) {
    if (!contactForm.valid) {
      return;
    }
    this.openModal();
    this.submitted = true;
    this.userInput.name = this.contactForm.value.name;
    this.userInput.email = this.contactForm.value.email;
    this.userInput.project = this.contactForm.value.projectType;
    this.userInput.budget = this.contactForm.value.budget;
    this.userInput.deets = this.contactForm.value.details;
    this.contactForm.reset({
      name: '',
      email: '',
      projectType: 'Type of Project',
      budget: 'Budget',
      deets: ''
    });
  }
}
