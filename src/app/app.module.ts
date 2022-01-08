import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import {ShoppingListService} from "./shared/services/shopping-list.service";
import {RoutingModule} from "./app-routing.module";
import {RecipeService} from "./shared/services/recipe.service";
import {SharedModule} from "./shared/modules/shared.module";
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'roxo-shop'}),
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
