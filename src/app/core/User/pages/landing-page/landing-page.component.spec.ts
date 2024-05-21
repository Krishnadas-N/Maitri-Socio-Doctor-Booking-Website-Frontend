import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCOmponentComponent } from './landing-page.component';

describe('LandingCOmponentComponent', () => {
  let component: LandingCOmponentComponent;
  let fixture: ComponentFixture<LandingCOmponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingCOmponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingCOmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
