import {Recipe} from "../models/recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../models/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subject} from "rxjs/Subject";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class RecipeService{
  recipeEvent = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('دستور پخت ماکارونی',
      'یک توضیح تست برای دستور پخت ماکارونی قرار می دهیم',
      'https://deow9bq0xqvbj.cloudfront.net/image-logo/935735/espageti.jpg',
        [new Ingredient('سیب زمینی', 1), new Ingredient('پیاز',3)]),
    new Recipe('دستور پخت سوپ',
      'یک توضیح تست برای دستور پخت سوپ ایرانی و تغییرات بوجود آمده قرار می دهیم',
      'http://www.beytoote.com/images/stories/food/barley-soup-eb015.jpg',
      [new Ingredient('رشته سوپی', 1), new Ingredient('سبزیجات',2)]),
    new Recipe('دستور پخت قرمه سبزی',
      'یک توضیح تست برای دستور پخت قرمه سبزی برای تغییرات قرار می دهیم',
      'http://chelobarekat.com/wp-content/uploads/2017/08/%D8%AE%D9%88%D8%B1%D8%B4%D8%AA-%D9%82%D8%B1%D9%85%D9%87-%D8%B3%D8%A8%D8%B2%DB%8C.jpg',
      [new Ingredient('لوبیا', 2), new Ingredient('گوشت',2)]),
  ]

  constructor(private shoppingListService: ShoppingListService){}

  getRecipe(){
    return this.recipes.slice()
  }
  getRecipeDetail(index: number){
    return this.recipes[index]
  }
  addRecipeToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addFromRecipeShoppingList(ingredients)

  }
  addRecipe(newRecipe: Recipe){
    this.recipes.push(newRecipe)
    this.recipeEvent.next(this.recipes.slice())
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeEvent.next(this.recipes.slice())
  }
  deleteRecipe(index: number){
    this.recipes.splice(index,1)
    this.recipeEvent.next(this.recipes.slice())
  }
}
