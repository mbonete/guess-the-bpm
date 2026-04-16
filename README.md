# Guess The BPM

An interactive music rhythm guessing game. Listen to a song, tap along to the beat, and see how close your BPM guess is to the real one.

## How to Play

1. Press play on the YouTube player
2. Tap the big button rhythmically for about 15 seconds
3. Hit **Submit** to lock in your guess
4. The app reveals the actual BPM — within ±1 BPM counts as correct!
5. Try another song with **Next song**

## Tech Stack

- **React 19** with **TypeScript**
- **Vite** for dev server and bundling
- **Tailwind CSS v4** for styling
- **i18next** for internationalization (EN/ES)
- **lucide-react** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the dev server         |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build |

## Project Structure

```
src/
├── main.tsx                 # Entry point
├── index.css                # Tailwind config and global styles
├── i18n.ts                  # i18next setup (EN/ES)
├── songs.ts                 # Song database (YouTube IDs + BPMs)
├── hooks/useGame.tsx        # Game state (Context + useReducer)
└── components/
    ├── App.tsx              # Main layout
    ├── TouchableButton.tsx  # Tap / action buttons
    ├── ResultSection.tsx    # BPM results display
    ├── YoutubeEmbed.tsx     # YouTube player
    └── LanguageButton.tsx   # EN/ES toggle
```

---

Made from Spain with &hearts; Maria Bonete
