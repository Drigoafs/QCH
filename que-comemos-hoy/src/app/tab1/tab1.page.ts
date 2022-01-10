import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../core/services/ingredients.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  ingredients = [];
  recipes = [];
  searchIngredientsText;

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.ingredientsService.getIngredients().subscribe((ingredients)=> {
      console.log(ingredients);
    });
  }

  searchIngredients(event) {
    console.log(event);

    this.searchIngredientsText = event.detail.value;
    this.ingredientsService.searchIngredients(this.searchIngredientsText).subscribe((data)=>{
      console.log(data);
    });
  }

}
