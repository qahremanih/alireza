import {Component,Input, OnInit} from '@angular/core';
import {Recipe} from "../../../shared/models/recipe.model";

@Component({
  selector: 'app-recpie-item',
  templateUrl: './recpie-item.component.html',
  styleUrls: ['./recpie-item.component.css']
})
export class RecpieItemComponent implements OnInit {
  @Input() recipe: Recipe
  @Input() index: number

  ngOnInit() {
  }

}
