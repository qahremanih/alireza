import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingListService} from "../shared/services/shopping-list.service";
import {Ingredient} from "../shared/models/ingredient.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[]
  ingredientSubscription: Subscription

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    this.ingredientSubscription = this.shoppingListService.ingredientEvent.subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients
      }
    )
  }
  onEditIngredient(index){
    this.shoppingListService.startedEditIngredientIndex.next(index)
  }
  ngOnDestroy(){
    this.ingredientSubscription.unsubscribe();
  }
}
