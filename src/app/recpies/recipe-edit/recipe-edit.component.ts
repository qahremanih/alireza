import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../../shared/services/recipe.service";
import {Recipe} from "../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  editForm: FormGroup

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = +params['id']
        this.editMode = params['id'] != null
      }
    )
    this.initForm()
  }
  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([])

    if(this.editMode){
      const recipe = this.recipeService.getRecipeDetail(this.id);
      //  this.recipeService.getRecipeDetail(this.id).subscribe(
      //   (response) =>{
      //     recipeName = response.name;
      //     recipeImagePath = response.imagePath;
      //     recipeDescription = response.description;
      //     if(response['ingredients']){
      //       for(let ingredient of recipe['ingredients']){
      //         recipeIngredients.push(
      //           new FormGroup({
      //             name: new FormControl(ingredient.name, Validators.required),
      //             amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]),
      //           })
      //         )
      //       }
      //     }
      //   }
      // )
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe['ingredients']){
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]),
            })
          )
        }
      }
    }

    this.editForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    })
  }
  onSubmit(){
      // const name = this.editForm.get('name').value;
      // const imagePath = this.editForm.get('imagePath').value;
      // const description = this.editForm.get('description').value;
      // const ingredients = this.editForm.get('ingredients').value;
      // const recipe = new Recipe(name, imagePath, description, ingredients)

      if(this.editMode){
        this.recipeService.updateRecipe(this.id, this.editForm.value)
      }else{
        this.recipeService.addRecipe(this.editForm.value)
      }
      this.onCancel();
  }
  addIngredient(){
    (<FormArray>this.editForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]),
      })
    )
  }
  onCancel(){
    this.router.navigate(['/recpies'])
  }
  onDeleteIngredient(index){
    (<FormArray>this.editForm.get('ingredients')).removeAt(index)
  }
}
