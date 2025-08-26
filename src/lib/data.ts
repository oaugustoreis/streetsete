export type TShirtCategory = "Graphic" | "Minimalist" | "Vintage" | "Retro";
import { tshirtImages } from "@/lib/images-import/images-imports";
import type { StaticImageData } from "next/image";

export type TShirt = {
    id: number;
    name: string;
    price: number;
    image: string | StaticImageData;
    imageBack: string | StaticImageData;
    category: TShirtCategory;
    aiHint: string;
    type: "Oversized" | "Regular" | "Slim";
    description: string;
};
export const tshirts: TShirt[] = [
    {
        id: 1,
        name: "Catzilla",
        price: 98.9,
        image: tshirtImages.catzilla.front,
        imageBack: tshirtImages.catzilla.back,
        category: "Vintage",
        type: "Oversized",
        aiHint: "skull glitch",
        description:
            "Um gato preto gigante ataca uma cidade asiática, causando caos e destruição. E o que nos resta fazer é uma camisa sobre isso.",
    },
    
    {
        id: 3,
        name: "A Mona é Pop",
        price: 98.9,
        image: tshirtImages.mona.front,
        imageBack: tshirtImages.mona.back,
        category: "Graphic",
        type: "Oversized",
        aiHint: "mona lisa remix",
        description: '"Uma palavra na tua camiseta, o planeta na tua cama"',
    },
    {
        id: 4,
        name: "Punk Rock",
        price: 98.9,
        image: tshirtImages.punkRock.front,
        imageBack: tshirtImages.punkRock.back,
        category: "Retro",
        type: "Oversized",
        aiHint: "punk rock skull",
        description: "Well, I'm a punk rocker, yes, I am",
    },
    {
        id: 5,
        name: "2Cat",
        price: 98.9,
        image: tshirtImages.twoCat.front,
        imageBack: tshirtImages.twoCat.back,
        category: "Graphic",
        type: "Oversized",
        aiHint: "two cats illustration",
        description: "West side mother f**ers.",
    },
    {
        id: 6,
        name: "Venus Classic",
        price: 98.9,
        image: tshirtImages.venus.front,
        imageBack: tshirtImages.venus.back,
        category: "Vintage",
        type: "Oversized",
        aiHint: "venus retro art",
        description:
            "Um pintura que traz a beleza atemporal de um coelhinho em uma obra que parece familiar a todos nós.",
    },
    {
        id: 7,
        name: "Akir..  Agostinho",
        price: 98.9,
        image: tshirtImages.akiraAgostinho.back,
        imageBack: tshirtImages.akiraAgostinho.front,
        category: "Retro",
        type: "Regular",
        aiHint: "akira retro art",
        description: "Obra-prima clássica da teledramaturgia mundial.",
    },
    {
        id: 8,
        name: "Bobber",
        price: 98.9,
        image: tshirtImages.bobberMotocycle.front,
        imageBack: tshirtImages.bobberMotocycle.back,
        category: "Retro",
        type: "Regular",
        aiHint: "bobber retro art",
        description:
            "Ta tocando Scorpions, você sobe na sua moto bobberzona, bota o capacete de coquinho e vai no mercadinho comprar merenda. ",
    },

    {
        id: 10,
        name: "Brasilia",
        price: 59.0,
        image: tshirtImages.veryPorreta.back,
        imageBack: tshirtImages.veryPorreta.front,
        category: "Retro",
        type: "Regular",
        aiHint: "carrara retro art",
        description: "Oxente ai, ai, ai! Mas comigo ela não quer se casar",
    },
    {
        id: 12,
        name: "Charmander",
        price: 98.9,
        image: tshirtImages.charmander.front,
        imageBack: tshirtImages.charmander.back,
        category: "Graphic",
        type: "Oversized",
        aiHint: "Pode ser um Pokémon",
        description: "Um largato que cospe fogo? Por que não? ",
    },
    {
        id: 15,
        name: "Guys in black",
        price: 59.0,
        image: tshirtImages.guysInBlack.back,
        imageBack: tshirtImages.guysInBlack.front,
        category: "Graphic",
        type: "Regular",
        aiHint: "Pode ser um Pokémon",
        description:
            "São cinco... você entende a referência não precisa repetir",
    },
    {
        id: 16,
        name: "Madruga",
        price: 59.0,
        image: tshirtImages.madruga.back,
        imageBack: tshirtImages.madruga.front,
        category: "Retro",
        type: "Regular",
        aiHint: "Pode ser um Pokémon",
        description: "Realmente, ruim é ter que trabalhar",
    },
    {
        id: 17,
        name: "Muppets in black",
        price: 59.0,
        image: tshirtImages.muppetsInBlack.back,
        imageBack: tshirtImages.muppetsInBlack.front,
        category: "Graphic",
        type: "Regular",
        aiHint: "Pode ser um Pokémon",
        description:
            "Você já viu esse filme antes, essas referências são impossíveis de ignorar.",
    },
    {
        id: 18,
        name: "Mustang",
        price: 59.0,
        image: tshirtImages.mustang.front,
        imageBack: tshirtImages.mustang.back,
        category: "Retro",
        type: "Regular",
        aiHint: "Pode ser um mustang",
        description: "John Wick mataria por um desses, e eu também.",
    },
    {
        id: 19,
        name: "Pulp Muppet",
        price: 59.0,
        image: tshirtImages.pulpMuppet.back,
        imageBack: tshirtImages.pulpMuppet.front,
        category: "Graphic",
        type: "Regular",
        aiHint: "Pode ser um mustang",
        description:
            "Kermit e Fozzie estreiam esse longa inédito, cheio de reviravoltas e referências jamais vistas em lugar nenhum.",
    },
    {
        id: 20,
        name: "Supra",
        price: 59.0,
        image: tshirtImages.supra.front,
        imageBack: tshirtImages.supra.back,
        category: "Retro",
        type: "Regular",
        aiHint: "Pode ser um mustang",
        description:
            "Não só de bichos gigantes vivem os japoneses, eles também sabem fazer uns carros legais.",
    },
];
