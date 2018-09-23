import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureTrackerComponent } from './temperature-tracker.component';

describe('TemperatureTrackerComponent', () => {
  let component: TemperatureTrackerComponent;
  let fixture: ComponentFixture<TemperatureTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
