import { Service } from '@angular/core';
import { IDiscoverCard } from '../types/discover-card';

@Service()
export class DiscoverFeed {
  discoverItems: IDiscoverCard[] = [
  {
    title: 'Quick Weeknight Dinners',
    type: 'quick-dinners',
    subtitle: 'Dinner in 30',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
  },
  {
    title: 'Vegan Favorites',
    type: 'vegan',
    subtitle: 'Plant-powered',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
  },
  {
    title: 'Midnight Snacks',
    type: 'midnight-snacks',
    subtitle: 'Late-night cravings',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  },
  {
    title: 'High Protein Meals',
    type: 'high-protein',
    subtitle: 'Fuel up',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d',
  },
  {
    title: 'Breakfast Ideas',
    type: 'breakfast',
    subtitle: 'Good morning',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8',
  },
  {
    title: 'Sweet Treats',
    type: 'desserts',
    subtitle: 'Save room',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
  },
    {
    title: 'Sweet Treats',
    type: 'desserts',
    subtitle: 'Save room',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
  },
    {
    title: 'Sweet Treats',
    type: 'desserts',
    subtitle: 'Save room',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
  },
];
}
