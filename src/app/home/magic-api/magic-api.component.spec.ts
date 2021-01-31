import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicApiComponent } from './magic-api.component';

describe('MagicApiComponent', () => {
  let component: MagicApiComponent;
  let fixture: ComponentFixture<MagicApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
