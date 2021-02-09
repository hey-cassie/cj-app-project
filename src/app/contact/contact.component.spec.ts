import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ ContactComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the contact component', () => {
    expect(component).toBeTruthy();
  });

  it("should disable the submit button when input is empty", () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeTruthy();
    //I don't think this test is actually testing correctly
  });

  it('should render "SWEET" in a h3 tag', () => {
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('SWEET');
  });

});
