import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTokens = create(persist(
  (set) => ({
    accessToken: "",
    refreshToken: "",
    settAccessToken: (token) => set((state) => ({...state, accessToken: token })),
    settRefreshToken: (token) => set((state) => ({...state, refreshToken: token })),
    clearTokens:  () => set((state) => ({...state, accessToken: "", refreshToken: "" })),
  }),{name:"tokens"}
))
 