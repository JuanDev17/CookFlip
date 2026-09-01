export type CategoryType =
  | 'quick-easy'
  | 'breakfast'
  | 'lunch'
  | 'dinner'
  | 'desserts'
  | 'healthy'
  | 'high-protein'
  | 'vegan'
  | 'vegetarian'
  | 'comfort-food'
  | 'pasta'
  | 'chicken'
  | 'seafood'
  | 'meal-prep'
  | 'snacks';

export interface ICategory {
  title: string;
  type: CategoryType;
  image: string;
}