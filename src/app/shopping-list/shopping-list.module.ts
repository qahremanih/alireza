import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/modules/shared.module";
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import {ShoppingListRoutingModule} from "./shopping-list-routing.module";

@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports:[
    ReactiveFormsModule,
    SharedModule,
    ShoppingListRoutingModule
  ]
})

export class ShoppingListModule{}