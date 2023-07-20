import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeroService } from '../hero.service';

import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponent],
      providers: [HeroService]
    })

    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a ul with zero li's`, () => {
    expect(fixture.debugElement.query(By.css('ul'))).not.toBeNull();
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(0);
  });

  it(`should a ul with one li when there is one message`, () => {
    component.heroSvc.getHeroes();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(1);
  })

  // Arret à 41`40
});
