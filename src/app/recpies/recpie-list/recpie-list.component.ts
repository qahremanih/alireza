import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../../shared/models/recipe.model";
import {RecipeService} from "../../shared/services/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeEvent.subscribe(
      (recipes: Recipe[])=>{
        this.recipes = recipes
      }
    )
    this.recipes = this.recipeService.getRecipe()

    /* this.recipeService.getRecipe().subscribe(
      (response: any) =>{
        this.recipes = response
      }
    )

     */
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
