import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedobjectComponent } from './feedobject.component';

describe('FeedobjectComponent', () => {
  let component: FeedobjectComponent;
  let fixture: ComponentFixture<FeedobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
