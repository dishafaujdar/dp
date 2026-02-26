import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#EDEADE',
        'parch-dk': '#E4E0D0',
        ink: '#1A1A1A',
        'ink-dim': '#888880',
        'ink-desc': '#3D3D3A',
        divider: '#C8C4B4',
        badge: '#F5C842',
      },
      fontFamily: {
        mono: ['var(--font-mono)', '"Courier Prime"', '"Courier New"', 'monospace'],
      },
      maxWidth: {
        content: '860px',
      },
    },
  },
  plugins: [],
}

export default config
