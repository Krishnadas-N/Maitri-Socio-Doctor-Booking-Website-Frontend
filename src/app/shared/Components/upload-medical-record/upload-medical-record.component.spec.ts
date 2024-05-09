/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UploadMedicalRecordComponent } from './upload-medical-record.component';

describe('UploadMedicalRecordComponent', () => {
  let component: UploadMedicalRecordComponent;
  let fixture: ComponentFixture<UploadMedicalRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMedicalRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMedicalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
