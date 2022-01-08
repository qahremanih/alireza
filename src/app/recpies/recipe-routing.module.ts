import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecpiesComponent} from "../recpies/recpies.component";
import {RecpieDetailComponent} from "../recpies/recpie-detail/recpie-detail.component";
import {RecipeEditComponent} from "../recpies/recipe-edit/recipe-edit.component";


const recipeRoutes: Routes = [
  {path: '', component: RecpiesComponent, children:[
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecpieDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},
  ]},
]


@NgModule({
  imports : [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})


export class RecipeRoutingModule{}