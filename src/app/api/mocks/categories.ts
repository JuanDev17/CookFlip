import { Service } from '@angular/core';
import { ICategory } from '../types/category.type';

@Service()
export class Categories {

    categories: ICategory[] = [
  {
    title: 'Quick & Easy',
    type: 'quick-easy',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
  },
  {
    title: 'Breakfast',
    type: 'breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8',
  },
  {
    title: 'Lunch Ideas',
    type: 'lunch',
    image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088',
  },
  {
    title: 'Dinner',
    type: 'dinner',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d',
  },
  {
    title: 'Desserts',
    type: 'desserts',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
  },
  {
    title: 'Healthy Eats',
    type: 'healthy',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
  },
  {
    title: 'High Protein',
    type: 'high-protein',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435',
  },
  {
    title: 'Vegan',
    type: 'vegan',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
  },
  {
    title: 'Vegetarian',
    type: 'vegetarian',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
  },
  {
    title: 'Comfort Food',
    type: 'comfort-food',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9',
  },
  {
    title: 'Pasta',
    type: 'pasta',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
  },
  {
    title: 'Chicken',
    type: 'chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435',
  },
  {
    title: 'Seafood',
    type: 'seafood',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae',
  },
  {
    title: 'Meal Prep',
    type: 'meal-prep',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
  },
  {
    title: 'Snacks',
    type: 'snacks',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2aa9454f',
  },
];
    
}
