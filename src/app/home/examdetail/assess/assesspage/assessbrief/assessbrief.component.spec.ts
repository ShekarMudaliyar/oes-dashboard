import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessbriefComponent } from './assessbrief.component';

describe('AssessbriefComponent', () => {
  let component: AssessbriefComponent;
  let fixture: ComponentFixture<AssessbriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessbriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessbriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
