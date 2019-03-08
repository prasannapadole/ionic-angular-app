import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Poha',
      imageUrl: 'https://www.cookwithmanali.com/wp-content/uploads/2014/08/Poha-Recipe-notitle-cwm.jpg',
      ingredients: ['Poha','Chilli','Turmeric','Salt','Musterd','Coriander Leaves']
    },
    {
      id: 'r2',
      title: 'Upama',
      imageUrl: 'https://www.cookingwithsiddhi.com/wp-content/uploads/2018/06/vegetable-rava-upma-750x422.png',
      ingredients: ['Rava','Chilli','Turmeric','Salt','Musterd','Moong','tomato','Coriander Leaves']
    }
  ];

  constructor() { }

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: string): Recipe {
    return {
      ...this.recipes.find(recipe => {
        return recipeId === recipe.id;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
