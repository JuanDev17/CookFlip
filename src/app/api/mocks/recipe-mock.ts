import { Service } from '@angular/core';
 import { IRecipeCard } from '../types/recipe.type'; 
@Service()
export class RecipeMock {
   
MOCK_RECIPES: IRecipeCard[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    title: 'Creamy Tomato Pasta',
    rating: '4.8',
    isFavorite: true,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93',
    title: 'Fluffy Pancakes',
    rating: '4.7',
    isFavorite: false,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    title: 'Healthy Buddha Bowl',
    rating: '4.9',
    isFavorite: true,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
    title: 'Chocolate Chip Cookies',
    rating: '4.6',
    isFavorite: false,
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624',
    title: 'Spicy Ramen',
    rating: '4.8',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d',
    title: 'Avocado Toast',
    rating: '4.5',
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141',
    title: 'Pesto Pasta',
    rating: '4.9',
    isFavorite: true,
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38',
    title: 'Berry Smoothie Bowl',
    rating: '4.7',
  },
];
}
