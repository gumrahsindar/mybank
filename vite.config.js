import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: /mybank/,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        onboarding: resolve(__dirname, 'onboarding.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        profile: resolve(__dirname, 'profile.html'),
        services: resolve(__dirname, 'services.html'),
        signin: resolve(__dirname, 'sign-in.html'),
        transactions: resolve(__dirname, 'transactions.html'),
      },
    },
  },
})
