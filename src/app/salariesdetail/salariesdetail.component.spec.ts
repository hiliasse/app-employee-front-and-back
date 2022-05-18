import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalariesdetailComponent } from './salariesdetail.component';

describe('SalariesdetailComponent', () => {
  let component: SalariesdetailComponent;
  let fixture: ComponentFixture<SalariesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalariesdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalariesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
