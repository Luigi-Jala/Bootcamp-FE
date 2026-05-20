import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MOCK_RECIPES } from './smock-recipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly recipe = signal(MOCK_RECIPES[0]);
  protected readonly servings = signal(1);
  protected readonly adjustedIngredients = computed(() =>
    this.recipe().ingredients.map(i => ({
      ...i,
      quantity: i.quantity * this.servings()
    }))
  );

  protected changeRecipe(index:number) : void {
    this.recipe.set(MOCK_RECIPES[Math.max(0, Math.min(MOCK_RECIPES.length, index))]);
  }

  protected incrementServings(count:number) : void {
    this.servings.update( val => Math.max(1, val + count));
  }

}
