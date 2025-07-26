import { useState, useRef, useEffect } from 'react'
import './App.css'

interface Song {
  id: string
  name: string
  file: string
  duration?: number
  coverImage?: string
}

// Real songs data from the public folder
const sampleSongs: Song[] = [
  {
    id: '1',
    name: 'Priori - 4see',
    file: '/Priori - 4see (1).mp3'
  },
  {
    id: '2', 
    name: 'You Know Why',
    file: '/You Know Why.mp3'
  }
]

function App() {
  const [songs] = useState<Song[]>(sampleSongs)
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const playPause = async (song?: Song) => {
    if (!audioRef.current) return

    try {
      if (song && song.id !== currentSong?.id) {
        setError(null)
        setCurrentSong(song)
        audioRef.current.src = song.file
        audioRef.current.load()
        await audioRef.current.play()
        setIsPlaying(true)
      } else if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (err) {
      console.error('Playback error:', err)
      setError(`Could not play "${song?.name || currentSong?.name}". Please check if the MP3 file exists in the public folder.`)
      setIsPlaying(false)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => setIsPlaying(false)
    const handleError = () => {
      setError(`Error loading audio file. Please check if the MP3 file exists.`)
      setIsPlaying(false)
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🎵 JN Grooves 🎵</h1>
        <p className="app-subtitle">Your groovy music experience</p>
        <div className="credits">
          <span className="credits-text">Curated by Jonas Nico</span>
        </div>
        {songs.length === 0 && (
          <div className="empty-state">
            <p>No songs available. Add MP3 files to the public folder to get started!</p>
          </div>
        )}
      </header>

      {error && (
        <div className="error-banner">
          <span className="error-icon">⚠️</span>
          <span className="error-text">{error}</span>
          <button className="error-close" onClick={() => setError(null)}>×</button>
        </div>
      )}

      <main className="music-grid">
        {songs.map((song) => (
          <div key={song.id} className={`song-card ${currentSong?.id === song.id ? 'playing' : ''}`}>
            <div className="song-cover">
              {song.coverImage ? (
                <img src={song.coverImage} alt={song.name} />
              ) : (
                <div className="placeholder-cover">
                  <span className="musical-note">♪</span>
                </div>
              )}
            </div>
            
            <div className="song-info">
              <h3 className="song-name">{song.name}</h3>
              <p className="song-duration">
                {currentSong?.id === song.id && duration ? formatTime(duration) : '--:--'}
              </p>
              <p className="song-file">{song.file}</p>
            </div>
            
            <button 
              className={`play-button ${currentSong?.id === song.id && isPlaying ? 'playing' : ''}`}
              onClick={() => playPause(song)}
              title={`Play ${song.name}`}
            >
              {currentSong?.id === song.id && isPlaying ? '⏸️' : '▶️'}
            </button>
          </div>
        ))}
      </main>

      {currentSong && (
        <div className="player-bar">
          <div className="player-info">
            <span className="now-playing">Now Playing: {currentSong.name}</span>
          </div>
          <div className="player-controls">
            <button onClick={() => playPause()} className="control-button" title="Play/Pause">
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <div className="time-info">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
          <div className="progress-container">
            <div 
              className="progress-bar"
              style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
            />
          </div>
        </div>
      )}

      <audio ref={audioRef} />
    </div>
  )
}

export default App
