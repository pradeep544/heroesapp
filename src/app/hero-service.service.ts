import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './heroes';
import { of, Observable } from 'rxjs';
import {MessageServiceService} from './message-service.service';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor(private messageService: MessageServiceService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
