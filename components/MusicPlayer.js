import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { Audio } from 'expo-av';
import { appStyles } from '../src/styles.js'; // Import the shared styles

// List of songs for the player
const songs = [
  { title: "Song 1", uri: require('../assets/music1.mp3') },
  { title: "Song 2", uri: require('../assets/music2.mp3') },
  { title: "Song 3", uri: require('../assets/music3.mp3') }
];

const MusicPlayer = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const currentSong = songs[currentSongIndex]; // Current song based on index

  // Load and play a song
  const loadAndPlay = async () => {
    if (sound) {
      await sound.unloadAsync(); // Unload previous sound
    }

    const { sound: newSound } = await Audio.Sound.createAsync(currentSong.uri);
    setSound(newSound);
    newSound.playAsync();
    setIsPlaying(true);
  };

  // Play or pause the current song
  const playPauseMusic = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Stop the music
  const stopMusic = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  // Play the next song
  const nextSong = async () => {
    let nextIndex = currentSongIndex + 1;
    if (nextIndex >= songs.length) nextIndex = 0; // Loop back to first song
    setCurrentSongIndex(nextIndex);
  };

  // Play the previous song
  const previousSong = async () => {
    let prevIndex = currentSongIndex - 1;
    if (prevIndex < 0) prevIndex = songs.length - 1; // Loop back to last song
    setCurrentSongIndex(prevIndex);
  };

  // Effect to load and play the song when currentSongIndex changes
  useEffect(() => {
    loadAndPlay();

    return () => {
      if (sound) {
        sound.unloadAsync(); // Cleanup when component unmounts or song changes
      }
    };
  }, [currentSongIndex]);

  return (
    <View style={appStyles.musicPlayerContainer}>
      <Text style={appStyles.musicTitle}>{currentSong.title}</Text>
      <View style={appStyles.musicControls}>
        <Button title="Previous" onPress={previousSong} color="#4A7C89" />
        <Button title={isPlaying ? "Pause" : "Play"} onPress={playPauseMusic} color="#4A7C89" />
        <Button title="Stop" onPress={stopMusic} color="#4A7C89" />
        <Button title="Next" onPress={nextSong} color="#4A7C89" />
      </View>
    </View>
  );
};

export default MusicPlayer;
