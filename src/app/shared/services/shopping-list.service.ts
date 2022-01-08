import {Ingredient} from "../models/ingredient.model";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {

  ingredientEvent = new Subject<Ingredient[]>()
  startedEditIngredientIndex = new Subject<number>()

  private ingredients: Ingredient[] = [
    new Ingredient('بسته ماکارونی', 1),
    new Ingredient('پیاز', 2),
  ]

  getIngredient(){
    return this.ingredients.slice();
  }
  getIngredientIndex(index){
    return this.ingredients[index]
  }
  addIngredient(name:string, amount: number){
    this.ingredients.push(new Ingredient(name, amount))
    this.ingredientEvent.next(this.ingredients.slice())
  }
  addFromRecipeShoppingList(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientEvent.next(this.ingredients.slice())
  }
  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientEvent.next(this.ingredients.slice())
  }
  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientEvent.next(this.ingredients)
  }
}