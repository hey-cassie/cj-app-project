import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach (() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the about component', () => {
    expect(component).toBeTruthy();
  });

  it('should render "About Me" in a h3 tag', () => {
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('About Me');
  });
});
