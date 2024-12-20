"use client";

import { useState, useCallback } from "react";
import { toast } from "react-toastify";

type ErrorType = Error | string | unknown;

interface ErrorDetails {
  message: string;
  code?: string;
  timestamp: number;
}

export function useErrorHandler() {
  const [error, setError] = useState<ErrorDetails | null>(null);

  const handleError = useCallback(
    (error: ErrorType, customMessage?: string) => {
      const timestamp = Date.now();
      let errorDetails: ErrorDetails;

      if (error instanceof Error) {
        errorDetails = {
          message: customMessage || error.message,
          code: error.name,
          timestamp,
        };
        console.error("Erreur détectée:", {
          message: error.message,
          name: error.name,
          stack: error.stack,
        });
      } else if (typeof error === "string") {
        errorDetails = {
          message: customMessage || error,
          timestamp,
        };
        console.error("Erreur détectée:", error);
      } else {
        errorDetails = {
          message: customMessage || "Une erreur inattendue est survenue",
          timestamp,
        };
        console.error("Erreur inattendue:", error);
      }

      setError(errorDetails);
      toast.error(errorDetails.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    handleError,
    clearError,
  };
}
