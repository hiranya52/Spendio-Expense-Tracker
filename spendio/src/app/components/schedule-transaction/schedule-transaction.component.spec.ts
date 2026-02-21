import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTransactionComponent } from './schedule-transaction.component';

describe('ScheduleTransactionComponent', () => {
  let component: ScheduleTransactionComponent;
  let fixture: ComponentFixture<ScheduleTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
