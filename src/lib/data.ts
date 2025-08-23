export type TShirtCategory = 'Graphic' | 'Minimalist' | 'Vintage';
import catzillaFrente from "@/images/tshirts/catzila_frente.png";
import catzillaBack from "@/images/tshirts/catzila_costa.png";

import catzillaDoisFrente from "@/images/tshirts/catzila_dois_frente.png";
import catzillaDoisBack from "@/images/tshirts/catzila_dois_costa.png";

import monaFrente from "@/images/tshirts/mona_frente.png";
import monaBack from "@/images/tshirts/mona_costa.png";

import punkRockFrente from "@/images/tshirts/punk_rock_frente.png";
import punkRockBack from "@/images/tshirts/punk_rock_costa.png";

import twoCatFrente from "@/images/tshirts/twocat_frente.png";
import twoCatBack from "@/images/tshirts/twocat_costa.png";

import venusFrente from "@/images/tshirts/venus_frente.png";
import venusBack from "@/images/tshirts/venus_costa.png";

import type { StaticImageData } from "next/image";

export type TShirt = {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
  imageBack: string | StaticImageData;
  category: TShirtCategory;
  aiHint: string;
  description: string;
};
export const tshirts: TShirt[] = [
  {
    id: 1,
    name: 'Catzilla',
    price: 69.90,
    image: catzillaFrente,
    imageBack: catzillaBack,
    category: 'Vintage',
    aiHint: 'skull glitch',
    description: 'Um gato preto gigante ataca uma cidade asiática, causando caos e destruição. E o que nos resta fazer é uma camisa sobre isso.',
  },
  {
    id: 2,
    name: 'Catzila 2: O Retorno',
    price: 40.00,
    image: catzillaDoisFrente,
    imageBack: catzillaDoisBack,
    category: 'Vintage',
    aiHint: 'astronaut dj',
    description: 'Outro gato gigante ataca outra cidade asiática, também, causando caos e destruição. Também fizemos uma camisa sobre isso.',
  },
  {
    id: 3,
    name: 'A Mona é Pop',
    price: 45.00,
    image: monaFrente,
    imageBack: monaBack,
    category: 'Graphic',
    aiHint: 'mona lisa remix',
    description: '"Uma palavra na tua camiseta, o planeta na tua cama"',
  },
  {
    id: 4,
    name: 'Punk Rock',
    price: 38.00,
    image: punkRockFrente,
    imageBack: punkRockBack,
    category: 'Minimalist',
    aiHint: 'punk rock skull',
    description: 'Well, I\'m a punk rocker, yes, I am',
  },
  {
    id: 5,
    name: '2Cat',
    price: 35.00,
    image: twoCatFrente,
    imageBack: twoCatBack,
    category: 'Graphic',
    aiHint: 'two cats illustration',
    description: 'West side mother f**ers.',
  },
  {
    id: 6,
    name: 'Venus Classic',
    price: 42.00,
    image: venusFrente,
    imageBack: venusBack,
    category: 'Vintage',
    aiHint: 'venus retro art',
    description: 'Um pintura que traz a beleza atemporal de um coelhinho em uma obra que parece familiar a todos nós.',
  },
];

