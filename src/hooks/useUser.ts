"use client";

import { useState, useEffect } from "react";
import { getCurrentUser } from "@/app/api/utils/auth";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return user;
}
