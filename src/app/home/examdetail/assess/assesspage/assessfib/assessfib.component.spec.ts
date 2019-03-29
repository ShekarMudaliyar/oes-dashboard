import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessfibComponent } from './assessfib.component';

describe('AssessfibComponent', () => {
  let component: AssessfibComponent;
  let fixture: ComponentFixture<AssessfibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessfibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessfibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
