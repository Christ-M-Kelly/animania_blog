"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useErrorHandler } from "@/src/hooks/useErrorHandler";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { handleError } = useErrorHandler();
  const isMounted = useRef(true);

  const toggleVisibility = useCallback(() => {
    if (!isMounted.current) return;

    try {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsVisible(
        scrollPosition > windowHeight * 0.5 ||
          scrollPosition + windowHeight >= documentHeight
      );
    } catch (error) {
      if (isMounted.current) {
        handleError(
          error,
          "Erreur lors du calcul de la position de défilement"
        );
      }
    }
  }, [handleError]);

  useEffect(() => {
    try {
      toggleVisibility();
      window.addEventListener("scroll", toggleVisibility, { passive: true });

      return () => {
        isMounted.current = false;
        window.removeEventListener("scroll", toggleVisibility);
      };
    } catch (error) {
      if (isMounted.current) {
        handleError(error, "Erreur lors de l'initialisation du défilement");
      }
    }
  }, [toggleVisibility]);

  const scrollToTop = useCallback(() => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      handleError(error, "Erreur lors du défilement vers le haut");
    }
  }, [handleError]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 right-0 mb-16 mr-14 z-[9999] transition-opacity duration-300 opacity-100"
      role="complementary"
    >
      <button
        onClick={scrollToTop}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        aria-label="Retourner en haut de la page"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
