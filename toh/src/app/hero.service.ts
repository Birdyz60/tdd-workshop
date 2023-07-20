import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({ providedIn: 'root' })
export class HeroService {
  public messages: string[] = [];

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    this.addMessage('Retrieved all Heroes');
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    this.addMessage('Retrieved Hero ' + id);

    const hero = HEROES.find(h => h.id === id) as Hero;
    return of(hero);
  }

  private addMessage(message: string) {
    this.messages.push(message);
  }

  clearMessages() {
    this.messages = [];
  }
}
