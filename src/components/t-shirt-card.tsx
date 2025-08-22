"use client";

import Image from 'next/image';
import type { TShirt } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

interface TShirtCardProps {
  tshirt: TShirt;
}

export function TShirtCard({ tshirt }: TShirtCardProps) {
  const handleBuyClick = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "5511999999999"; 
    const message = encodeURIComponent(
      `Hello! I'm interested in the "${tshirt.name}" t-shirt for $${tshirt.price.toFixed(2)}.`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="flex flex-col overflow-hidden border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden">
          <Image
            src={tshirt.image}
            alt={tshirt.name}
            width={600}
            height={600}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={tshirt.aiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex justify-between">
        <CardTitle className="text-xl font-headline tracking-tight">{tshirt.name}</CardTitle>
        <p className="text-2xl font-bold text-primary">${tshirt.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex  justify-between items-center">
        <Button variant="outline" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground border-accent-foreground/20" onClick={handleBuyClick}>
          <WhatsAppIcon className="h-5 w-5 mr-2" />
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
