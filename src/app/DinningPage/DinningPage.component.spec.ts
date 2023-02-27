/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DinningPageComponent } from './DinningPage.component';

describe('DinningPageComponent', () => {
  let component: DinningPageComponent;
  let fixture: ComponentFixture<DinningPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinningPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
