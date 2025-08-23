"use client";

import Image from 'next/image';
import type { Shirt } from "@/lib/datas";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Badge } from './ui/badge';

interface TShirtCardProps {
  shirt: Shirt;
}

export function TShirtCards({ shirt }: TShirtCardProps) {

  const handleBuyClick = () => {
    const phoneNumber = "5592995349354";
    const message = encodeURIComponent(
      `Hello! I'm interested in the "${shirt.name}" t-shirt for $${shirt.price.toFixed(2)}.`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="flex flex-col border border-gray-300 overflow-hidden s transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group">
      <CardHeader className="p-0 ">
        <div className=" overflow-hidden">
          <Carousel
            className="w-full"
            opts={{
              align: "start",

              loop: true,
            }}
          >

            <CarouselContent>
              <CarouselItem>
                <div className="relative  overflow-hidden group">
                  <Image
                    src={shirt.imageUrls[0]}
                    alt={shirt.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={shirt.aiHint}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative  overflow-hidden group">
                  <Image
                    src={shirt.imageUrls[1]}
                    alt={shirt.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={shirt.aiHint}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

        </div>
      </CardHeader>
       <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-headline">{shirt.name}</CardTitle>
          <Badge variant="outline" className="flex-shrink-0 text-background">
            {shirt.category}
          </Badge>
        </div>
        <CardDescription className="mt-2 text-sm">
           {shirt.description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex  justify-between items-center">
                  <CardTitle className="text-lg font-headline">R$ {shirt.price.toFixed(2)}</CardTitle>

        <Button variant="outline" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground " onClick={handleBuyClick}>
          <WhatsAppIcon className="h-5 w-5 mr-2" />
          Compre Agora
        </Button>
      </CardFooter>
    </Card>
  );
}
