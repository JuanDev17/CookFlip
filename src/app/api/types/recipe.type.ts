export interface IRecipeCard {
    id: string, 
    image: string,
    title: string,
    rating?: string,
    isFavorite?: boolean,
    description?: string;
  cookTime?: number;
  category?: string;
  tags?: string[];
  author?: string;
  imageHeight?:number
}

