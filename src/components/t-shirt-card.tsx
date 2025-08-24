"use client";

import Image from "next/image";
import type { TShirt } from "@/lib/data";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { Badge } from "./ui/badge";

interface TShirtCardProps {
    tshirt: TShirt;
}

export function TShirtCard({ tshirt }: TShirtCardProps) {
    if (!tshirt) {
        return null;
    }

    const handleBuyClick = () => {
        const phoneNumber = "5592995349354";
        const message = encodeURIComponent(
            `Oi! Estou interessado nessa camiseta "${
                tshirt.name
            }".`
        );
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, "_blank");
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
                                        src={tshirt.imageBack}
                                        alt={tshirt.name}
                                        width={600}
                                        height={600}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={tshirt.aiHint}
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="relative  overflow-hidden group">
                                    <Image
                                        src={tshirt.image}
                                        alt={tshirt.name}
                                        width={600}
                                        height={600}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={tshirt.aiHint}
                                    />
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-white/10 hover:bg-white/40 border-none" />
                        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-white/10 hover:bg-white/40 border-none" />
                    </Carousel>
                </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
                <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-lg font-headline">
                        {tshirt.name}
                    </CardTitle>
                    <div className="flex gap-2">
                        <Badge
                            variant="outline"
                            className="flex-shrink-0 text-background"
                        >
                            {tshirt.category}
                        </Badge>
                        <Badge
                            variant="outline"
                            className="flex-shrink-0 text-background"
                        >
                            {tshirt.type}
                        </Badge>
                    </div>
                </div>
                <CardDescription className="mt-2 text-sm">
                    {tshirt.description}
                </CardDescription>
            </CardContent>

            <CardFooter className="p-4 pt-0 flex  justify-between items-center">
                <CardTitle className="text-lg font-headline">
                    R$ {tshirt.price.toFixed(2)}
                </CardTitle>

                <Button
                    variant="outline"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground "
                    onClick={handleBuyClick}
                >
                    <WhatsAppIcon className="h-5 w-5 mr-2" />
                    Compre Agora
                </Button>
            </CardFooter>
        </Card>
    );
}
