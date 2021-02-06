import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFooterComponent } from './home-footer.component';

describe('HomeFooterComponent', () => {
  let component: HomeFooterComponent;
  let fixture: ComponentFixture<HomeFooterComponent>;

  beforeEach (() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFooterComponent ]
    });
    fixture = TestBed.createComponent(HomeFooterComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the home-footer component', () => {
    expect(component).toBeTruthy();
  });
});
