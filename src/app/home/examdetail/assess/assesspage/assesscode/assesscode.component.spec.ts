import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesscodeComponent } from './assesscode.component';

describe('AssesscodeComponent', () => {
  let component: AssesscodeComponent;
  let fixture: ComponentFixture<AssesscodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssesscodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
