import { create } from "zustand";

type AuthState = {
    isAuthenticate: boolean
    login: ()=> void
    logout: ()=> void
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticate: false,
    login: () => set({isAuthenticate: true}),
    logout: () => set({isAuthenticate: false})
}))