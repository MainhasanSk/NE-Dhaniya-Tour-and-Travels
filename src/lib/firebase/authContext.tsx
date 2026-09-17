"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  User, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut as fbSignOut 
} from "firebase/auth";
import { auth, isFirebaseConfigured } from "./config";
import { AdminRole, AdminUser } from "@/types";

interface AuthContextType {
  user: { email: string; displayName: string; role: AdminRole } | null;
  loading: boolean;
  isAdmin: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAdmin: false,
  login: async () => ({ success: false }),
  logout: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ email: string; displayName: string; role: AdminRole } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local session storage for mock admin mode
    const stored = typeof window !== "undefined" ? localStorage.getItem("ne_dhanya_admin_session") : null;
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        // ignore
      }
    }

    if (isFirebaseConfigured && auth) {
      const unsub = onAuthStateChanged(auth, (fbUser) => {
        if (fbUser) {
          const adminObj = {
            email: fbUser.email || "admin@nedhanyatours.com",
            displayName: fbUser.displayName || "Admin User",
            role: "super-admin" as AdminRole,
          };
          setUser(adminObj);
          if (typeof window !== "undefined") {
            localStorage.setItem("ne_dhanya_admin_session", JSON.stringify(adminObj));
          }
        }
        setLoading(false);
      });
      return () => unsub();
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, pass: string) => {
    // If Firebase configured, try Firebase Auth
    if (isFirebaseConfigured && auth) {
      try {
        const cred = await signInWithEmailAndPassword(auth, email, pass);
        const adminObj = {
          email: cred.user.email || email,
          displayName: cred.user.displayName || "Admin User",
          role: "super-admin" as AdminRole,
        };
        setUser(adminObj);
        localStorage.setItem("ne_dhanya_admin_session", JSON.stringify(adminObj));
        return { success: true };
      } catch (err: any) {
        return { success: false, error: err.message || "Failed to sign in" };
      }
    }

    // Local admin auth check for testing/offline setup
    if (email.trim() && pass.length >= 6) {
      const adminObj = {
        email: email.trim(),
        displayName: email.split("@")[0].toUpperCase(),
        role: "super-admin" as AdminRole,
      };
      setUser(adminObj);
      if (typeof window !== "undefined") {
        localStorage.setItem("ne_dhanya_admin_session", JSON.stringify(adminObj));
      }
      return { success: true };
    }

    return { success: false, error: "Please provide a valid email and password (min 6 characters)" };
  };

  const logout = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        await fbSignOut(auth);
      } catch (e) {
        console.error("Sign out error", e);
      }
    }
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("ne_dhanya_admin_session");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
