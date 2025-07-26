# 🎵 JN Grooves - Groovy Music Player

A beautifully designed, modern music player built with React and TypeScript. Features a groovy retro theme with smooth animations and full MP3 playback capabilities.

![JN Grooves Preview](https://via.placeholder.com/800x400/6a0572/ffffff?text=🎵+JN+Grooves+Music+Player)

## ✨ Features

- 🎵 **MP3 Playback** - Play MP3, WAV, OGG, and M4A audio files
- 🎨 **Groovy Theme** - Retro-inspired design with vibrant gradients and animations
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎛️ **Audio Controls** - Play/pause, progress tracking, and time display
- 💿 **Album Art** - Support for cover images (placeholder support for now)
- 🚫 **Error Handling** - Graceful handling of missing or corrupted audio files
- ⚡ **Fast & Modern** - Built with Vite for lightning-fast development

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download this repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your MP3 files to the `public` folder:**
   ```
   public/
   ├── sample1.mp3  (will display as "Groovy Sunset")
   ├── sample2.mp3  (will display as "Funky Bassline")
   ├── sample3.mp3  (will display as "Smooth Jazz Vibes")
   └── vite.svg
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## 🎵 Adding Your Music

### Method 1: Use Default Filenames
Simply add your MP3 files to the `public` folder with these names:
- `sample1.mp3`
- `sample2.mp3` 
- `sample3.mp3`

### Method 2: Customize Song Data
Edit the `sampleSongs` array in `src/App.tsx` to match your files:

```typescript
const sampleSongs: Song[] = [
  {
    id: '1',
    name: 'Your Song Name',
    file: '/your-file.mp3',
    duration: 180 // duration in seconds (optional)
  },
  // Add more songs...
]
```

## 🎨 Customizing the Theme

The app uses CSS custom properties for easy theming. Edit `src/App.css`:

```css
:root {
  --groove-purple: #6a0572;
  --groove-pink: #a663cc;
  --groove-orange: #ff6b35;
  --groove-yellow: #f7b801;
  --groove-cyan: #00a8cc;
  /* ... more colors */
}
```

## 🔧 Project Structure

```
jngrooves/
├── public/
│   ├── sample1.mp3      # Your MP3 files go here
│   ├── sample2.mp3
│   ├── sample3.mp3
│   └── README-AUDIO.md  # Instructions for adding audio
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Groovy theme styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── package.json
└── README.md
```

## 🎯 Features Overview

### Music Cards
- Animated gradient covers with musical note placeholders
- Song name, duration, and file path display
- Hover effects with shimmer animations
- Visual indication of currently playing track

### Player Controls
- Fixed bottom player bar when a song is playing
- Play/pause functionality
- Real-time progress tracking
- Time display (current/total)
- Visual progress bar

### Error Handling
- Graceful handling of missing audio files
- User-friendly error messages
- Dismissible error notifications

## 🛠️ Built With

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Custom properties, gradients, and animations
- **HTML5 Audio API** - Audio playback

## 📱 Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

*Note: MP3 support may vary by browser. For best compatibility, use modern browsers.*

## 🔮 Future Enhancements

- 📁 File system integration for automatic music discovery
- 🖼️ Album art upload and display
- 🔀 Shuffle and repeat modes
- 📋 Playlist management
- 🎚️ Volume control
- 🔊 Audio visualization
- 🌙 Dark/light theme toggle

## 🎵 Sample Music

For testing, you can download royalty-free music from:
- [Freesound](https://freesound.org/)
- [Jamendo](https://www.jamendo.com/)
- [Free Music Archive](https://freemusicarchive.org/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

---

**Enjoy your groovy music experience! 🎵✨**
