/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SavedPostComponent } from './saved-post.component';

describe('SavedPostComponent', () => {
  let component: SavedPostComponent;
  let fixture: ComponentFixture<SavedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
