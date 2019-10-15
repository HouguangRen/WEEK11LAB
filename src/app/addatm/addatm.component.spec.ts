import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddatmComponent } from './addatm.component';

describe('AddatmComponent', () => {
  let component: AddatmComponent;
  let fixture: ComponentFixture<AddatmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddatmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddatmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
