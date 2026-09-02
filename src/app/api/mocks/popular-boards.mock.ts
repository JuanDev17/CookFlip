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
        avatarUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },

      tags: ['Quick', 'Dinner', 'Easy'],

      previewRecipes: [
        {
          id: 'recipe-101',
          title: 'Creamy Garlic Pasta',
          imageUrl:
            'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=700&fit=crop',
        },
        {
          id: 'recipe-102',
          title: 'Chicken Tacos',
          imageUrl:
            'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=700&fit=crop',
        },
        {
          id: 'recipe-103',
          title: 'Honey Garlic Chicken',
          imageUrl:
            'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700&fit=crop',
        },
      ],

      recipeCount: 38,
      saveCount: 95,
    },

    {
      id: 'board-002',
      title: 'High Protein Meals',

      owner: {
        id: 'user-102',
        username: 'marcusfit',
        displayName: 'Marcus Johnson',
        avatarUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      },

      tags: ['High Protein', 'Healthy', 'Meal Prep'],

      previewRecipes: [
        {
          id: 'recipe-104',
          title: 'Steak Rice Bowl',
          imageUrl:
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&fit=crop',
        },
        {
          id: 'recipe-105',
          title: 'Greek Chicken Bowl',
          imageUrl:
            'https://images.unsplash.com/photo-1547592180-85f173990554?w=700&fit=crop',
        },
        {
          id: 'recipe-106',
          title: 'Salmon Quinoa Bowl',
          imageUrl:
            'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&fit=crop',
        },
      ],

      recipeCount: 52,
      saveCount: 110,
    },

    {
      id: 'board-003',
      title: 'Sunday Brunch',

      owner: {
        id: 'user-103',
        username: 'brunchwithmia',
        displayName: 'Mia Rodriguez',
        avatarUrl:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      },

      tags: ['Brunch', 'Breakfast', 'Weekend'],

      previewRecipes: [
        {
          id: 'recipe-107',
          title: 'Fluffy Buttermilk Pancakes',
          imageUrl:
            'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=700&fit=crop',
        },
        {
          id: 'recipe-108',
          title: 'Avocado Toast',
          imageUrl:
            'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=700&fit=crop',
        },
        {
          id: 'recipe-109',
          title: 'Berry French Toast',
          imageUrl:
            'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=700&fit=crop',
        },
      ],

      recipeCount: 24,
      saveCount: 85,
    },

    {
      id: 'board-004',
      title: 'Comfort Food Favorites',

      owner: {
        id: 'user-104',
        username: 'andreacooks',
        displayName: 'Andrea Williams',
        avatarUrl:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
      },

      tags: ['Comfort Food', 'Dinner', 'Homemade'],

      previewRecipes: [
        {
          id: 'recipe-110',
          title: 'Baked Mac & Cheese',
          imageUrl:
            'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=700&fit=crop',
        },
        {
          id: 'recipe-111',
          title: 'Chicken Pot Pie',
          imageUrl:
            'https://images.unsplash.com/photo-1574484284002-952d92456975?w=700&fit=crop',
        },
        {
          id: 'recipe-112',
          title: 'Homestyle Meatloaf',
          imageUrl:
            'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=700&fit=crop',
        },
      ],

      recipeCount: 46,
      saveCount: 120,
    },

    {
      id: 'board-005',
      title: 'Desserts Worth Making',

      owner: {
        id: 'user-105',
        username: 'sweetbyjess',
        displayName: 'Jessica Lee',
        avatarUrl:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop',
      },

      tags: ['Dessert', 'Baking', 'Sweet'],

      previewRecipes: [
        {
          id: 'recipe-113',
          title: 'Chocolate Lava Cake',
          imageUrl:
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&fit=crop',
        },
        {
          id: 'recipe-114',
          title: 'Strawberry Cheesecake',
          imageUrl:
            'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&fit=crop',
        },
        {
          id: 'recipe-115',
          title: 'Chocolate Chip Cookies',
          imageUrl:
            'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700&fit=crop',
        },
      ],

      recipeCount: 67,
      saveCount: 150,
    },

    {
      id: 'board-006',
      title: '30 Minute Meals',

      owner: {
        id: 'user-106',
        username: 'quickbites',
        displayName: 'Daniel Kim',
        avatarUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      },

      tags: ['30 Minutes', 'Quick', 'Weeknight'],

      previewRecipes: [
        {
          id: 'recipe-116',
          title: 'Spicy Shrimp Tacos',
          imageUrl:
            'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=700&fit=crop',
        },
        {
          id: 'recipe-117',
          title: 'Teriyaki Chicken',
          imageUrl:
            'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700&fit=crop',
        },
        {
          id: 'recipe-118',
          title: 'Garlic Butter Salmon',
          imageUrl:
            'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=700&fit=crop',
        },
      ],

      recipeCount: 31,
      saveCount: 90,
    },

    {
      id: 'board-007',
      title: 'Pasta Night',

      owner: {
        id: 'user-107',
        username: 'pastawithalex',
        displayName: 'Alex Martinez',
        avatarUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      },

      tags: ['Pasta', 'Italian', 'Dinner'],

      previewRecipes: [
        {
          id: 'recipe-119',
          title: 'Spaghetti Carbonara',
          imageUrl:
            'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&fit=crop',
        },
        {
          id: 'recipe-120',
          title: 'Creamy Cajun Pasta',
          imageUrl:
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700&fit=crop',
        },
        {
          id: 'recipe-121',
          title: 'Classic Lasagna',
          imageUrl:
            'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=700&fit=crop',
        },
      ],

      recipeCount: 43,
      saveCount: 105,
    },

    {
      id: 'board-008',
      title: 'Game Day Food',

      owner: {
        id: 'user-108',
        username: 'thehungryguy',
        displayName: 'Chris Thompson',
        avatarUrl:
          'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop',
      },

      tags: ['Game Day', 'Snacks', 'Party'],

      previewRecipes: [
        {
          id: 'recipe-122',
          title: 'Buffalo Chicken Wings',
          imageUrl:
            'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=700&fit=crop',
        },
        {
          id: 'recipe-123',
          title: 'Loaded Nachos',
          imageUrl:
            'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=700&fit=crop',
        },
        {
          id: 'recipe-124',
          title: 'Cheeseburger Sliders',
          imageUrl:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&fit=crop',
        },
      ],

      recipeCount: 29,
    },
  ];
}

