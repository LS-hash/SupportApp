// MoodTracker.js
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { appStyles } from '../src/styles.js'; // Import the shared styles
import { Calendar } from 'react-native-calendars'; // Import the calendar from react-native-calendars

const MoodTracker = () => {
  const [moodLogs, setMoodLogs] = useState({});
  const [selectedMood, setSelectedMood] = useState('');
  const [todayMood, setTodayMood] = useState('');
  const today = new Date().toLocaleDateString();

  const handleAddMood = () => {
    if (selectedMood) {
      setMoodLogs({
        ...moodLogs,
        [today]: { mood: selectedMood, date: today },
      });
      setTodayMood(selectedMood);
      setSelectedMood('');
    }
  };

  // Expanded list of emojis with grief-related annotations
  const emojis = [
    { symbol: '😢', annotation: 'Sadness' },
    { symbol: '💔', annotation: 'Heartbroken' },
    { symbol: '🌹', annotation: 'Remembrance' },
    { symbol: '🕊️', annotation: 'Peace' },
    { symbol: '😔', annotation: 'Reflection' },
    { symbol: '😞', annotation: 'Disappointment' },
    { symbol: '🥺', annotation: 'Longing' },
    { symbol: '😇', annotation: 'Acceptance' },
    { symbol: '💫', annotation: 'Hope' },
    { symbol: '😠', annotation: 'Anger' },
    { symbol: '😣', annotation: 'Frustration' },
    { symbol: '🤯', annotation: 'Shock' },
    { symbol: '😨', annotation: 'Fear' },
    { symbol: '😓', annotation: 'Guilt' },
    { symbol: '😩', annotation: 'Exhaustion' },
    { symbol: '😭', annotation: 'Crying' },
    { symbol: '😶', annotation: 'Numbness' },
    { symbol: '🤔', annotation: 'Confusion' },
    { symbol: '😌', annotation: 'Relief' },
    { symbol: '💐', annotation: 'Offering' },
    { symbol: '🙏', annotation: 'Prayer' },
    { symbol: '❤️', annotation: 'Love' },
    { symbol: '🌈', annotation: 'Hope for better days' },
    { symbol: '🌀', annotation: 'Turbulence' },
    { symbol: '😳', annotation: 'Surprise' },
    { symbol: '😕', annotation: 'Uncertainty' },
    { symbol: '😥', annotation: 'Sorrow' },
    { symbol: '🌿', annotation: 'Healing' },
    { symbol: '✨', annotation: 'Memories' },
    { symbol: '🌼', annotation: 'Innocence' },
    { symbol: '👨‍👩‍👧‍👦', annotation: 'Family Support' },
    { symbol: '💭', annotation: 'Thinking of You' },
    { symbol: '🧘‍♀️', annotation: 'Meditation' },
    { symbol: '📅', annotation: 'Milestones' },
    { symbol: '🌠', annotation: 'Wishing' },
    { symbol: '🌧️', annotation: 'Tears of Rain' },
  ];

  return (
    <ScrollView style={appStyles.container}>
      {/* Display Today's Date */}
      <Text style={appStyles.dateText}>Today's Date: {today}</Text>

      {/* Display Calendar */}
      <Calendar
        markedDates={Object.keys(moodLogs).reduce((acc, date) => {
          acc[date] = { marked: true, dotColor: '#A8C2C8' };
          return acc;
        }, {})}
        style={appStyles.calendar}
        theme={{
          todayTextColor: '#4A7C89',
          arrowColor: '#A8C2C8',
          selectedDayBackgroundColor: '#A8C2C8',
        }}
      />

      {/* Emoji Selection */}
      <Text style={appStyles.title}>How are you feeling today?</Text>
      <View style={styles.emojiGrid}>
        {emojis.map((emoji) => (
          <TouchableOpacity
            key={emoji.symbol}
            onPress={() => setSelectedMood(emoji.symbol)}
            style={[
              styles.emojiBox,
              selectedMood === emoji.symbol && appStyles.selectedEmoji,
            ]}
          >
            <Text style={appStyles.emoji}>{emoji.symbol}</Text>
            <Text style={appStyles.emojiAnnotation}>{emoji.annotation}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Display Selected Mood */}
      <Text style={appStyles.moodText}>
        {selectedMood ? `You selected: ${selectedMood}` : 'Please select your mood.'}
      </Text>

      {/* Log Mood Button */}
      <TouchableOpacity onPress={handleAddMood} style={appStyles.button}>
        <Text style={{ color: '#FFF', fontSize: 16 }}>Log Mood</Text>
      </TouchableOpacity>

      {/* Show Today's Mood */}
      {todayMood && (
        <Text style={appStyles.loggedMoodText}>Today's Mood: {todayMood}</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  emojiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  emojiBox: {
    width: '30%', // Each emoji takes up 30% of the available width
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default MoodTracker;
