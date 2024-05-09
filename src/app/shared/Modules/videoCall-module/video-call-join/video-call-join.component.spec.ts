/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideoCallJoinComponent } from './video-call-join.component';

describe('VideoCallJoinComponent', () => {
  let component: VideoCallJoinComponent;
  let fixture: ComponentFixture<VideoCallJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCallJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCallJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
