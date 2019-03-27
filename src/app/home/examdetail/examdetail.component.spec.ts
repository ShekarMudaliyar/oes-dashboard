import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamdetailComponent } from './examdetail.component';

describe('ExamdetailComponent', () => {
  let component: ExamdetailComponent;
  let fixture: ComponentFixture<ExamdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
