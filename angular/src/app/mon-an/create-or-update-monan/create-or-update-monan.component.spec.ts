import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateMonanComponent } from './create-or-update-monan.component';

describe('CreateOrUpdateMonanComponent', () => {
  let component: CreateOrUpdateMonanComponent;
  let fixture: ComponentFixture<CreateOrUpdateMonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateMonanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrUpdateMonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
