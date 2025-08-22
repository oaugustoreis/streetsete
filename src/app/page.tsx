"use client";

import * as React from 'react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TShirtCard } from "@/components/t-shirt-card";
import { tshirts, TShirtCategory } from "@/lib/data";
import { Shirt } from 'lucide-react';

export default function Home() {
  const [category, setCategory] = useState<TShirtCategory | "All">("All");

  const filteredTshirts = tshirts.filter(
    (tshirt) => category === "All" || tshirt.category === category
  );

  const categories: (TShirtCategory | "All")[] = ["All", "Graphic", "Minimalist", "Vintage"];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="py-8 text-center border-b border-border">
        <div className="flex items-center justify-center gap-4 mb-2">
            <Shirt className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold font-headline tracking-tighter">
                Streetwear Tees
            </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Exclusive designs for the modern rebel.
        </p>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Tabs defaultValue="All" onValueChange={(value) => setCategory(value as TShirtCategory | "All")} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
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
      </main>
      <footer className="text-center py-6 border-t border-border">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Streetwear Tees. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
