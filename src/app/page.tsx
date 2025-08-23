"use client";

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TShirtCard } from "@/components/t-shirt-card";
import { tshirts, TShirtCategory } from "@/lib/data";
import { Shirt, Facebook, Instagram, Twitter } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import BackToTopButton from '@/components/scroll-top';

export default function Home() {
  const [category, setCategory] = useState<TShirtCategory | "All">("All");

  const filteredTshirts = tshirts.filter(
    (tshirt) => category === "All" || tshirt.category === category
  );

  const categories: (TShirtCategory | "All")[] = ["All", "Graphic", "Minimalist", "Vintage"];

  return (
    <div className="flex flex-col min-h-screen bg-foreground">
      <header className="py-8 text-center bg-background">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-5xl font-bold font-headline tracking-tighter">
            Street Sete
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Exclusive designs for the modern rebel.
        </p>
      </header>
      <main className="flex-grow container mx-auto ">

        <section className="bg-foreground rounded-lg p-2">
          <Tabs defaultValue="All" onValueChange={(value) => setCategory(value as TShirtCategory | "All")} className="w-full">
            <TabsList className="grid  text-background max-w-md border mx-auto grid-cols-4 bg-foreground/50">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredTshirts.map((tshirt) => (
                  <TShirtCard key={tshirt.id} tshirt={tshirt} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      {/* <section className="">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-64 md:h-96 overflow-hidden group">
                <Image src="https://placehold.co/1200x400.png" alt="Promo Banner 1" layout="fill" objectFit="cover" data-ai-hint="fashion sale" className="transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
                  <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Nova Coleção</h2>
                  <p className="mt-2 text-lg md:text-2xl max-w-2xl">Designs que quebram barreiras e definem tendências. Seja o primeiro a vestir o futuro.</p>
                  <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">Compre Agora</Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-64 md:h-96 overflow-hidden group">
                <Image src="https://placehold.co/1200x400.png" alt="Promo Banner 2" layout="fill" objectFit="cover" data-ai-hint="streetwear model" className="transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
                  <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Estilo Urbano</h2>
                  <p className="mt-2 text-lg md:text-2xl max-w-2xl">Atitude em cada estampa. Feito para quem domina as ruas.</p>
                  <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">Ver Coleção</Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-64 md:h-96  overflow-hidden group">
                <Image src="https://placehold.co/1200x400.png" alt="Promo Banner 3" layout="fill" objectFit="cover" data-ai-hint="t-shirt design" className="transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
                  <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Edição Limitada</h2>
                  <p className="mt-2 text-lg md:text-2xl max-w-2xl">Não perca os lançamentos exclusivos. Peças únicas para um estilo único.</p>
                  <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">Saiba Mais</Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/20 hover:bg-black/40 border-none" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/20 hover:bg-black/40 border-none" />
        </Carousel>
      </section> */}
      <section className="bg-ring py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className=" text-background text-4xl font-bold font-headline mb-4 tracking-tight">Sobre a Street Sete</h2>
          <p className="text-background text-lg">
Nascemos da cultura, do cinema, da música e, acima de tudo, das referências que moldam nossa identidade. A Street Sete não é apenas uma marca de camisetas — é um manifesto de estilo, atitude e autenticidade. Nossas estampas modernas traduzem personalidade e vestem quem escolhe se expressar com coragem. Vista Street Sete.          </p>
        </div>
      </section>

      <footer className="bg-background  pt-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3 font-headline">Streetwear Tees</h3>
            <p className="text-muted-foreground text-sm">Vista sua atitude.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Navegue</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Coleções</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Contato</h3>
            <p className="text-sm text-muted-foreground">contato@streetsete.com</p>
            <p className="text-sm text-muted-foreground">(92) 99534-9354</p>
          </div>
        </div>
        <div className="text-center py-6 mt-8">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Street Sete. Todos os direitos reservados.</p>
        </div>
      </footer>
      <BackToTopButton />

    </div>
  );
}
