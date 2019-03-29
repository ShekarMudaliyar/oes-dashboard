import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmcqComponent } from './assessmcq.component';

describe('AssessmcqComponent', () => {
  let component: AssessmcqComponent;
  let fixture: ComponentFixture<AssessmcqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmcqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
