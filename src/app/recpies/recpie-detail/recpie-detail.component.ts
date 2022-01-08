import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../shared/models/recipe.model";
import {RecipeService} from "../../shared/services/recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recpie-detail',
  templateUrl: './recpie-detail.component.html',
  styleUrls: ['./recpie-detail.component.css']
})
export class RecpieDetailComponent implements OnInit {
  recpie: Recipe
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = +params['id']
        this.recpie = this.recipeService.getRecipeDetail(this.id)
        // this.recipeService.getRecipeDetail(this.id).subscribe(
        //   (response) =>{
        //     this.recpie = response
        //   }
        // )
      }
    )
  }
  addToShoppingList(){
    this.recipeService.addRecipeToShoppingList(this.recpie.ingredients)
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.id)
    // this.recipeService.deleteRecipe(this.id).subscribe(
    //   (response) =>{
    //     alert(response.message)
    //   }
    // )
    this.router.navigate(['/recpies'])
  }
}
