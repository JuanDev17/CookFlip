export interface RecipeApi {
  id: number;
  title: string;
  description: string;
  cookTime: number;
}

// create new type from RecipeApi without id property 
export type CreateRecipeRequest = Omit<RecipeApi, 'id'>;