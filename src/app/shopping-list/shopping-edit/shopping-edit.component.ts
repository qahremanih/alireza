import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingListService} from "../../shared/services/shopping-list.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingredient} from "../../shared/models/ingredient.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  ingredientForm: FormGroup
  editMode= false;
  indexIngredient: number;
  editItem : Ingredient;
  editSubscription: Subscription

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]),
    })

    this.editSubscription = this.shoppingListService.startedEditIngredientIndex.subscribe(
      (index: number) =>{
        this.indexIngredient = index
        this.editMode = true;
        this.editItem = this.shoppingListService.getIngredientIndex(index)
        this.ingredientForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      }
    )
  }
  ngOnDestroy(){
    this.editSubscription.unsubscribe();
  }

  onSubmit(){
    const name = this.ingredientForm.get('name').value
    const amount = this.ingredientForm.get('amount').value
    const ingredient = new Ingredient(name, amount)
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.indexIngredient, ingredient)
    }else{
      this.shoppingListService.addIngredient(name, amount)
    }
    this.editMode = false;
    this.ingredientForm.reset()
  }
  onClear(){
    this.ingredientForm.reset()
    this.editMode = false
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.indexIngredient)
    this.onClear();
  }
}
