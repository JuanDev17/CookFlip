import { RecipeSummary } from './recipe.type';
import { UserSummary } from './user.type';

export interface PopularBoard {
  id: string;
  title: string;
  owner: UserSummary;
  tags: string[];
  previewRecipes: RecipeSummary[];
  recipeCount: number;
}

export interface BoardDetails {
  id: string;
  title: string;
  description?: string;
  owner: UserSummary;
  tags: string[];
  recipes: RecipeSummary[];
  recipeCount: number;
  createdAt: string;
  updatedAt: string;
}