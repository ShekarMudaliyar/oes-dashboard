import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesspageComponent } from './assesspage.component';

describe('AssesspageComponent', () => {
  let component: AssesspageComponent;
  let fixture: ComponentFixture<AssesspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssesspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
