import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // beforeEach(waitForAsync (() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ HomeComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.debugElement.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach (() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    });
    //.compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });//this code is from angular documentation
  //(I added debugElement, detectChanges() and could add compileComponents)


  // it('should create the home component', () => {
  //   fixture = TestBed.createComponent(HomeComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }); this will pass, but is doing the same thing as second
  //beforeEach statement combined with the test below

  it('should create the home component', () => {
    expect(component).toBeTruthy();
  });
});
