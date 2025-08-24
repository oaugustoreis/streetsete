"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import logo_mobile from "@/images/logo_tres.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TShirtCategory } from "@/lib/data";
import { Facebook, Instagram, Twitter } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import BackToTopButton from "@/components/scroll-top";
import { Skeleton } from "@/components/ui/skeleton";
import { tshirts } from "@/lib/data";
import { TShirtCard } from "@/components/t-shirt-card";
import { useIsMobile } from "@/hooks/use-mobile"; // ajuste o caminho conforme a pasta onde seu hook está

export default function Home() {
    const isMobile = useIsMobile();
    const [category, setCategory] = useState<TShirtCategory | "All">("All");
    const [loading, setLoading] = useState(false);

    const filteredShirts = tshirts.filter(
        (shirt) => category === "All" || shirt.category === category
    );

    const categories: (TShirtCategory | "All")[] = [
        "All",
        "Graphic",
        "Vintage",
        "Retro",
    ];

    return (
        <div className="flex flex-col min-h-screen bg-foreground">
            <header className="py-2 text-center ">
                <div className="flex items-center  flex-col justify-center gap-2">
                    {isMobile ? (
                        <>
                            <Image
                                src={logo_mobile}
                                alt="Street Sete Logo"
                                width={280}
                            />
                            <p className="font-semibold text-background">
                                Camisas & Camisetas
                            </p>
                        </>
                    ) : (
                        <>
                            <Image
                                src={logo}
                                alt="Street Sete Logo"
                                width={80}
                                className="invert"
                            />
                            <div>
                                <h1 className="text-2xl text-background font-bold">
                                    Street Sete
                                </h1>
                                <p className="font-semibold text-background">
                                    Camisas & Camisetas
                                </p>
                                <p className="text-background text-sm">
                                    Na rua das referências, esquina com a da
                                    criatividade.
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </header>
            <main className="flex-grow container mx-auto ">
                <section className="bg-foreground rounded-lg p-2">
                    <Tabs
                        defaultValue="All"
                        onValueChange={(value) =>
                            setCategory(value as TShirtCategory | "All")
                        }
                        className="w-full text-center"
                    >
                        <TabsList className="grid  text-background max-w-md border mx-auto grid-cols-4 bg-foreground/50">
                            {categories.map((cat) => (
                                <TabsTrigger key={cat} value={cat}>
                                    {cat}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <TabsContent value={category}>
                            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {loading ? (
                                    Array.from({ length: 8 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex flex-col gap-4"
                                        >
                                            <Skeleton className="h-[300px] w-full" />
                                            <Skeleton className="h-6 w-3/4" />
                                            <Skeleton className="h-4 w-1/2" />
                                            <Skeleton className="h-10 w-full" />
                                        </div>
                                    ))
                                ) : tshirts.length > 0 ? (
                                    filteredShirts.map((shirt) => (
                                        <TShirtCard
                                            key={shirt.id}
                                            tshirt={shirt}
                                        />
                                    ))
                                ) : (
                                    <div className="col-span-full text-center py-16 text-muted-foreground">
                                        <p>No shirts found in this category.</p>
                                    </div>
                                )}
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>
            </main>

            <section className="bg-ring py-16">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className=" text-background text-4xl font-bold font-headline mb-4 tracking-tight">
                        Sobre a Street Sete
                    </h2>
                    <p className="text-background text-lg">
                        Todas as nossas camisetas são produzidas sob encomenda,
                        garantindo máxima qualidade tanto nas estampas quanto
                        nos tecidos. Antes do envio, cada peça passa por uma
                        triagem cuidadosa, assegurando que o cliente receba um
                        produto impecável.
                    </p>
                </div>
            </section>

            <footer className="bg-background  pt-12">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-3 font-headline">
                            Street Sete Camisetas
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Vista sua atitude.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3">Navegue</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary transition-colors"
                                >
                                    Início
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary transition-colors"
                                >
                                    Coleções
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary transition-colors"
                                >
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary transition-colors"
                                >
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3">Siga-nos</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3">Contato</h3>
                        <p className="text-sm text-muted-foreground">
                            contato@streetsete.com
                        </p>
                        <p className="text-sm text-muted-foreground">
                            (92) 99534-9354
                        </p>
                    </div>
                </div>
                <div className="text-center py-6 mt-8">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Street Sete. Todos os
                        direitos reservados.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Desenvolvido por Studio IO: Design & Desenvolvimento
                    </p>
                </div>
            </footer>
            <BackToTopButton />
        </div>
    );
}
