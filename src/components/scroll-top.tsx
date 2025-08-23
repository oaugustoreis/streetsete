"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Ícone de seta para cima
import { Button } from "@/components/ui/button";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar/esconder o botão ao rolar a página
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para voltar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 rounded-full p-3 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <ArrowUp size={20} />
      </Button>
    )
  );
}
