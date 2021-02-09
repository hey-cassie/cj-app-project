import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach (() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent ]
    });
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the gallery component', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Recent Work" in a h3 tag', () => {
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Recent Work');
  });

  // it('openModal() should be triggered on click', () => {
  //   let compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('h3').textContent).toContain('Recent Work');
  // });
  
});
