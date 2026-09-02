import { Service } from '@angular/core';
import { PopularBoard } from '../types/board.type';

@Service()
export class PopularBoardsMock {
    
    popularBoards: PopularBoard[] = [
  {
    id: 'board-001',
    title: 'Easy Weeknight Dinners',

    owner: {
      id: 'user-101',
      username: 'sarahcooks',
      displayName: 'Sarah Chen',
      avatarUrl: '/assets/users/sarah.jpg',
    },

    tags: ['Quick', 'Dinner', 'Easy'],

    previewRecipes: [
      {
        id: 'recipe-101',
        title: 'Creamy Garlic Pasta',
        imageUrl: '/assets/recipes/pasta.jpg',
      },
      {
        id: 'recipe-102',
        title: 'Chicken Tacos',
        imageUrl: '/assets/recipes/tacos.jpg',
      },
      {
        id: 'recipe-103',
        title: 'Honey Garlic Chicken',
        imageUrl: '/assets/recipes/chicken.jpg',
      },
    ],

    recipeCount: 38,
  },

  {
    id: 'board-002',
    title: 'High Protein Meals',

    owner: {
      id: 'user-102',
      username: 'marcusfit',
      displayName: 'Marcus Johnson',
      avatarUrl: '/assets/users/marcus.jpg',
    },

    tags: ['High Protein', 'Healthy', 'Meal Prep'],

    previewRecipes: [
      {
        id: 'recipe-104',
        title: 'Steak Rice Bowl',
        imageUrl: '/assets/recipes/steak-bowl.jpg',
      },
      {
        id: 'recipe-105',
        title: 'Greek Chicken Bowl',
        imageUrl: '/assets/recipes/greek-chicken.jpg',
      },
      {
        id: 'recipe-106',
        title: 'Salmon Quinoa Bowl',
        imageUrl: '/assets/recipes/salmon-quinoa.jpg',
      },
    ],

    recipeCount: 52,
  },

  {
    id: 'board-003',
    title: 'Sunday Brunch',

    owner: {
      id: 'user-103',
      username: 'brunchwithmia',
      displayName: 'Mia Rodriguez',
      avatarUrl: '/assets/users/mia.jpg',
    },

    tags: ['Brunch', 'Breakfast', 'Weekend'],

    previewRecipes: [
      {
        id: 'recipe-107',
        title: 'Fluffy Buttermilk Pancakes',
        imageUrl: '/assets/recipes/pancakes.jpg',
      },
      {
        id: 'recipe-108',
        title: 'Avocado Toast',
        imageUrl: '/assets/recipes/avocado-toast.jpg',
      },
      {
        id: 'recipe-109',
        title: 'Berry French Toast',
        imageUrl: '/assets/recipes/french-toast.jpg',
      },
    ],

    recipeCount: 24,
  },

  {
    id: 'board-004',
    title: 'Comfort Food Favorites',

    owner: {
      id: 'user-104',
      username: 'andreacooks',
      displayName: 'Andrea Williams',
      avatarUrl: '/assets/users/andrea.jpg',
    },

    tags: ['Comfort Food', 'Dinner', 'Homemade'],

    previewRecipes: [
      {
        id: 'recipe-110',
        title: 'Baked Mac & Cheese',
        imageUrl: '/assets/recipes/mac-cheese.jpg',
      },
      {
        id: 'recipe-111',
        title: 'Chicken Pot Pie',
        imageUrl: '/assets/recipes/chicken-pot-pie.jpg',
      },
      {
        id: 'recipe-112',
        title: 'Homestyle Meatloaf',
        imageUrl: '/assets/recipes/meatloaf.jpg',
      },
    ],

    recipeCount: 46,
  },

  {
    id: 'board-005',
    title: 'Desserts Worth Making',

    owner: {
      id: 'user-105',
      username: 'sweetbyjess',
      displayName: 'Jessica Lee',
      avatarUrl: '/assets/users/jessica.jpg',
    },

    tags: ['Dessert', 'Baking', 'Sweet'],

    previewRecipes: [
      {
        id: 'recipe-113',
        title: 'Chocolate Lava Cake',
        imageUrl: '/assets/recipes/lava-cake.jpg',
      },
      {
        id: 'recipe-114',
        title: 'Strawberry Cheesecake',
        imageUrl: '/assets/recipes/cheesecake.jpg',
      },
      {
        id: 'recipe-115',
        title: 'Chocolate Chip Cookies',
        imageUrl: '/assets/recipes/cookies.jpg',
      },
    ],

    recipeCount: 67,
  },

  {
    id: 'board-006',
    title: '30 Minute Meals',

    owner: {
      id: 'user-106',
      username: 'quickbites',
      displayName: 'Daniel Kim',
      avatarUrl: '/assets/users/daniel.jpg',
    },

    tags: ['30 Minutes', 'Quick', 'Weeknight'],

    previewRecipes: [
      {
        id: 'recipe-116',
        title: 'Spicy Shrimp Tacos',
        imageUrl: '/assets/recipes/shrimp-tacos.jpg',
      },
      {
        id: 'recipe-117',
        title: 'Teriyaki Chicken',
        imageUrl: '/assets/recipes/teriyaki-chicken.jpg',
      },
      {
        id: 'recipe-118',
        title: 'Garlic Butter Salmon',
        imageUrl: '/assets/recipes/garlic-salmon.jpg',
      },
    ],

    recipeCount: 31,
  },

  {
    id: 'board-007',
    title: 'Pasta Night',

    owner: {
      id: 'user-107',
      username: 'pastawithalex',
      displayName: 'Alex Martinez',
      avatarUrl: '/assets/users/alex.jpg',
    },

    tags: ['Pasta', 'Italian', 'Dinner'],

    previewRecipes: [
      {
        id: 'recipe-119',
        title: 'Spaghetti Carbonara',
        imageUrl: '/assets/recipes/carbonara.jpg',
      },
      {
        id: 'recipe-120',
        title: 'Creamy Cajun Pasta',
        imageUrl: '/assets/recipes/cajun-pasta.jpg',
      },
      {
        id: 'recipe-121',
        title: 'Classic Lasagna',
        imageUrl: '/assets/recipes/lasagna.jpg',
      },
    ],

    recipeCount: 43,
  },

  {
    id: 'board-008',
    title: 'Game Day Food',

    owner: {
      id: 'user-108',
      username: 'thehungryguy',
      displayName: 'Chris Thompson',
      avatarUrl: '/assets/users/chris.jpg',
    },

    tags: ['Game Day', 'Snacks', 'Party'],

    previewRecipes: [
      {
        id: 'recipe-122',
        title: 'Buffalo Chicken Wings',
        imageUrl: '/assets/recipes/buffalo-wings.jpg',
      },
      {
        id: 'recipe-123',
        title: 'Loaded Nachos',
        imageUrl: '/assets/recipes/nachos.jpg',
      },
      {
        id: 'recipe-124',
        title: 'Cheeseburger Sliders',
        imageUrl: '/assets/recipes/sliders.jpg',
      },
    ],

    recipeCount: 29,
  },
];
}
