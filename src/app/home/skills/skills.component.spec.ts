import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach (() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsComponent ]
    });
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the skills component', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct title in a h5 tag', () => {
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('ILLUSTRATION');
    //expect(compiled.querySelector('h5').textContent).toContain(component.skills.title);
  });
});
