import { Component, signal, computed } from "@angular/core";
import { MOCK_RECIPES } from '../smock-recipes';
import { RecipeDetail } from "../recipe-detail/recipe-detail";

@Component({
    selector: 'app-recipe-list',
    standalone: true,
    imports: [RecipeDetail],
    templateUrl: './recipe-list.html'
})
export class RecipeList {
    protected readonly recipe = signal(MOCK_RECIPES[0]);

    protected changeRecipe(index:number) : void {
        this.recipe.set(MOCK_RECIPES[Math.max(0, Math.min(MOCK_RECIPES.length-1, index))]);
    }

}