import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsMonanComponent } from './ds-monan.component';

describe('DsMonanComponent', () => {
  let component: DsMonanComponent;
  let fixture: ComponentFixture<DsMonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsMonanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsMonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
