import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MagicApiComponent } from './magic-api.component';

describe('MagicApiComponent', () => {
  let component: MagicApiComponent;
  let fixture: ComponentFixture<MagicApiComponent>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ MagicApiComponent ]
    })
      .compileComponents();
      fixture = TestBed.createComponent(MagicApiComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  }));

  it('should create the magic-api component', () => {
    expect(component).toBeTruthy();
  });

  //would like to test if data is fetched!
});
