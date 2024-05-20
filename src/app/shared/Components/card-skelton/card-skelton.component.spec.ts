/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardSkeltonComponent } from './card-skelton.component';

describe('CardSkeltonComponent', () => {
  let component: CardSkeltonComponent;
  let fixture: ComponentFixture<CardSkeltonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSkeltonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSkeltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
