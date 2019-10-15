import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddATMComponent } from './add-atm.component';

describe('AddATMComponent', () => {
  let component: AddATMComponent;
  let fixture: ComponentFixture<AddATMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddATMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddATMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
