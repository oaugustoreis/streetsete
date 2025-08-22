export type TShirtCategory = 'Graphic' | 'Minimalist' | 'Vintage';

export type TShirt = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: TShirtCategory;
  aiHint: string;
};

export const tshirts: TShirt[] = [
  {
    id: 1,
    name: 'Glitch Skull',
    price: 35.00,
    image: 'https://placehold.co/600x600.png',
    category: 'Graphic',
    aiHint: 'skull glitch',
  },
  {
    id: 2,
    name: 'Astro Funk',
    price: 40.00,
    image: 'https://placehold.co/600x600.png',
    category: 'Graphic',
    aiHint: 'astronaut dj',
  },
  {
    id: 3,
    name: 'Simple Lines',
    price: 28.00,
    image: 'https://placehold.co/600x600.png',
    category: 'Minimalist',
    aiHint: 'minimalist lineart',
  },
  {
    id: 4,
    name: 'Retro Wave',
    price: 32.00,
    image: 'https://placehold.co/600x600.png',
    category: 'Vintage',
    aiHint: 'retro sunset',
  },
  {
    id: 5,
    name: 'Urban Explorer',
    price: 35.00,
    image: 'https://placehold.co/600x600.png',
    category: 'Graphic',
    aiHint: 'city graffiti',
  },
  {
    id: 6,
    name: 'Dot Matrix',
    price: 28.00,
    image: 'https://placehold.co/600x600.png',
    category: 'Minimalist',
    aiHint: 'dot pattern',
  },
  {
    id: 7,
    name: '90s Throwback',
    price: 32.00,
    image: 'https://placehold.co/600x600.png',
    category: 'Vintage',
    aiHint: '90s pattern',
  },
  {
    id: 8,
    name: 'Cybernetic',
    price: 40.00,
    image: 'https://placehold.co/600x600.png',
    category: 'Graphic',
    aiHint: 'cyberpunk circuit',
  },
];
