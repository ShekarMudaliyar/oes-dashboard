import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddateComponent } from './adddate.component';

describe('AdddateComponent', () => {
  let component: AdddateComponent;
  let fixture: ComponentFixture<AdddateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
