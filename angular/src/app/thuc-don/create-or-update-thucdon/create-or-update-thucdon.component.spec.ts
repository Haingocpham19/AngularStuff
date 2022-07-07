import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateThucdonComponent } from './create-or-update-thucdon.component';

describe('CreateOrUpdateThucdonComponent', () => {
  let component: CreateOrUpdateThucdonComponent;
  let fixture: ComponentFixture<CreateOrUpdateThucdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateThucdonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrUpdateThucdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
