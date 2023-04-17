/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Buy_bookComponent } from './buy_book.component';

describe('Buy_bookComponent', () => {
  let component: Buy_bookComponent;
  let fixture: ComponentFixture<Buy_bookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buy_bookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buy_bookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
