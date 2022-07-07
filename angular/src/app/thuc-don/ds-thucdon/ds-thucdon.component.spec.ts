import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsThucdonComponent } from './ds-thucdon.component';

describe('DsThucdonComponent', () => {
  let component: DsThucdonComponent;
  let fixture: ComponentFixture<DsThucdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsThucdonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsThucdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
