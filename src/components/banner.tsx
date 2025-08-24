import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

export default function Banner() {
    return (
        <section className="">
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
                            <Image
                                src="https://placehold.co/1200x400.png"
                                alt="Promo Banner 1"
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="fashion sale"
                                className="transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
                                <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
                                    Nova Coleção
                                </h2>
                                <p className="mt-2 text-lg md:text-2xl max-w-2xl">
                                    Designs que quebram barreiras e definem
                                    tendências. Seja o primeiro a vestir o
                                    futuro.
                                </p>
                                <Button
                                    size="lg"
                                    className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
                                >
                                    Compre Agora
                                </Button>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="relative h-64 md:h-96 overflow-hidden group">
                            <Image
                                src="https://placehold.co/1200x400.png"
                                alt="Promo Banner 2"
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="streetwear model"
                                className="transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
                                <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
                                    Estilo Urbano
                                </h2>
                                <p className="mt-2 text-lg md:text-2xl max-w-2xl">
                                    Atitude em cada estampa. Feito para quem
                                    domina as ruas.
                                </p>
                                <Button
                                    size="lg"
                                    className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
                                >
                                    Ver Coleção
                                </Button>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="relative h-64 md:h-96  overflow-hidden group">
                            <Image
                                src="https://placehold.co/1200x400.png"
                                alt="Promo Banner 3"
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="t-shirt design"
                                className="transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
                                <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
                                    Edição Limitada
                                </h2>
                                <p className="mt-2 text-lg md:text-2xl max-w-2xl">
                                    Não perca os lançamentos exclusivos. Peças
                                    únicas para um estilo único.
                                </p>
                                <Button
                                    size="lg"
                                    className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
                                >
                                    Saiba Mais
                                </Button>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/20 hover:bg-black/40 border-none" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/20 hover:bg-black/40 border-none" />
            </Carousel>
        </section>
    );
}
