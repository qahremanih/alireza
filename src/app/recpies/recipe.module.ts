import {NgModule} from "@angular/core";
import { RecpiesComponent } from '../recpies/recpies.component';
import { RecpieListComponent } from '../recpies/recpie-list/recpie-list.component';
import { RecpieDetailComponent } from '../recpies/recpie-detail/recpie-detail.component';
import { RecpieItemComponent } from '../recpies/recpie-list/recpie-item/recpie-item.component';
import { RecipeEditComponent } from '../recpies/recipe-edit/recipe-edit.component';

import {ReactiveFormsModule} from "@angular/forms";
import {RecipeRoutingModule} from "./recipe-routing.module";
import {SharedModule} from "../shared/modules/shared.module";

@NgModule({
  declarations:[
    RecpiesComponent,
    RecpieListComponent,
    RecpieDetailComponent,
    RecpieItemComponent,
    RecipeEditComponent
  ],
  imports:[
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ]
})

export class RecipeModule{}