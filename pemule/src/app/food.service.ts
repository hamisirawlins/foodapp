import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Food} from './food';
import {FOODS} from './mock-foods';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor(private messageService: MessageService) { }

  getFoods(): Observable<Food[]> {
    // TODO: send the message _after_ fetching the foods
    this.messageService.add('FoodService: fetched foods');
    return of(FOODS);
  }
  getFood(id: number): Observable<Food> {
    // TODO: send the message _after_ fetching the food
    this.messageService.add(`FoodService: fetched food id=${id}`);
    return of(FOODS.find(food => food.id === id));
  }
}
