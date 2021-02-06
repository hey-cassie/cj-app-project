import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutFooterComponent } from './about-footer.component';

describe('AboutFooterComponent', () => {
  let component: AboutFooterComponent;
  let fixture: ComponentFixture<AboutFooterComponent>;

  beforeEach (() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFooterComponent ]
    });
    fixture = TestBed.createComponent(AboutFooterComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the about-footer component', () => {
    expect(component).toBeTruthy();
  });
});
