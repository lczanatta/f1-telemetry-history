import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitChartComponent } from './fit-chart.component';

describe('FitChartComponent', () => {
  let component: FitChartComponent;
  let fixture: ComponentFixture<FitChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
