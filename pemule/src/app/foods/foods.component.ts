import { Component, OnInit } from '@angular/core';
import {Food} from '../food';
import { FoodService } from '../food.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  selectedFood: Food;

  foods: Food[];

  constructor(private foodService: FoodService, private messageService: MessageService) { }

  ngOnInit() {
    this.getFoods();
  }

  onSelect(food: Food): void {
    this.selectedFood = food;
    this.messageService.add(`FoodsComponent: Selected food id=${food.id}`);
  }

  getFoods(): void {
    this.foodService.getFoods()
        .subscribe(foods => this.foods = foods);
  }
}
