import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTuningComponent } from './body-tuning.component';

describe('BodyTuningComponent', () => {
  let component: BodyTuningComponent;
  let fixture: ComponentFixture<BodyTuningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTuningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTuningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
