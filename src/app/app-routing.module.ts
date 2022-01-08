import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recpies', loadChildren: './recpies/recipe.module#RecipeModule'},
]


@NgModule({
  imports : [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})


export class RoutingModule{}
