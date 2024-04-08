import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFeedMainComponent } from './doctor-feed-main.component';

describe('DoctorFeedMainComponent', () => {
  let component: DoctorFeedMainComponent;
  let fixture: ComponentFixture<DoctorFeedMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorFeedMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorFeedMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
