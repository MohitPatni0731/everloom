import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  // Theme
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  toggleTheme: () => void
  
  // Waitlist
  waitlistCount: number
  setWaitlistCount: (count: number) => void
  
  // User progress
  userProgress: number
  setUserProgress: (progress: number) => void
  
  // Development progress
  developmentProgress: number
  setDevelopmentProgress: (progress: number) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Theme state
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => {
        const currentTheme = get().theme
        set({ theme: currentTheme === 'light' ? 'dark' : 'light' })
      },
      
      // Waitlist state
      waitlistCount: 1247,
      setWaitlistCount: (count) => set({ waitlistCount: count }),
      
      // User progress
      userProgress: 0,
      setUserProgress: (progress) => set({ userProgress: progress }),
      
      // Development progress
      developmentProgress: 78,
      setDevelopmentProgress: (progress) => set({ developmentProgress: progress }),
    }),
    {
      name: 'everloom-storage',
      partialize: (state) => ({ 
        theme: state.theme,
        waitlistCount: state.waitlistCount
      }),
    }
  )
) 