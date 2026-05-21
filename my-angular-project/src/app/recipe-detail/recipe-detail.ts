import { Component, input, signal, computed } from "@angular/core";
import { RecipeModel } from "../models";

@Component({
    selector: 'app-recipe-detail',
    standalone: true,
    templateUrl: './recipe-detail.html',
    styleUrl: './recipe-detail.css'
})
export class RecipeDetail {

    recipe = input<RecipeModel>();

    protected readonly servings = signal(1);
    protected readonly adjustedIngredients = computed(() =>
        this.recipe()?.ingredients.map(i => ({
        ...i,
        quantity: i.quantity * this.servings()
        }))
    );
    protected readonly recipeImage = computed(() => this.recipe()?.imgUrl);



    protected incrementServings(count:number) : void {
        this.servings.update( val => Math.max(1, val + count));
    }
}