# Adding MP3 Files to JN Grooves

To use the music player with your own MP3 files:

1. Add your MP3 files to this `public` folder
2. Name them as referenced in the app:
   - `sample1.mp3` - Will display as "Groovy Sunset"
   - `sample2.mp3` - Will display as "Funky Bassline" 
   - `sample3.mp3` - Will display as "Smooth Jazz Vibes"

Or update the song data in `src/App.tsx` to match your file names.

## Example File Structure:
```
public/
  ├── sample1.mp3
  ├── sample2.mp3
  ├── sample3.mp3
  └── vite.svg
```

## Supported Formats:
- MP3 (.mp3)
- WAV (.wav)  
- OGG (.ogg)
- M4A (.m4a)

The app will gracefully handle missing files by showing an error message when trying to play them. 