export type TShirtCategory = 'Graphic' | 'Minimalist' | 'Vintage';
import catzillaFrente from "@/images/tshirts/catzila_frente.jpg";
import catzillaBack from "@/images/tshirts/catzila_costa.jpg";
import type { StaticImageData } from "next/image";

export type TShirt = {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
  imageBack: string | StaticImageData;
  category: TShirtCategory;
  aiHint: string;
};

export const tshirts: TShirt[] = [
  {
    id: 1,
    name: 'Catzilla',
    price: 69.90,
    image: catzillaFrente,
    imageBack: catzillaBack,
    category: 'Graphic',
    aiHint: 'skull glitch',
  },
  {
    id: 2,
    name: 'Astro Funk',
    price: 40.00,
    image: catzillaFrente,
    imageBack: catzillaBack,
    category: 'Graphic',
    aiHint: 'astronaut dj',
  },
  {
    id: 3,
    name: 'Simple Lines',
    price: 28.00,
    image: catzillaFrente,
    imageBack: catzillaBack,
    category: 'Minimalist',
    aiHint: 'minimalist lineart',
  },
  {
    id: 4,
    name: 'Retro Wave',
    price: 32.00,
    image: catzillaFrente,
    imageBack: catzillaBack,
    category: 'Vintage',
    aiHint: 'retro sunset',
  },
  {
    id: 5,
    name: 'Urban Explorer',
    price: 35.00,
    image: catzillaFrente,
    imageBack: catzillaBack,
    category: 'Graphic',
    aiHint: 'city graffiti',
  },
  {
    id: 6,
    name: 'Dot Matrix',
    price: 28.00,
    image: catzillaFrente,
    imageBack: catzillaBack,
    category: 'Minimalist',
    aiHint: 'dot pattern',
  },
  {
    id: 7,
    name: '90s Throwback',
    price: 32.00,
    image: catzillaFrente,
    imageBack: catzillaBack,
    category: 'Vintage',
    aiHint: '90s pattern',
  },
  {
    id: 8,
    name: 'Cybernetic',
    price: 40.00,
    image: catzillaFrente,
    imageBack: catzillaBack,
    category: 'Graphic',
    aiHint: 'cyberpunk circuit',
  },
];
