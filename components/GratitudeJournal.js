import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Alert, StyleSheet } from 'react-native';
import { appStyles } from '../src/styles.js'; // Import shared styles

const GratitudeJournal = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  // Add a new gratitude entry
  const handleAddEntry = () => {
    if (newEntry.trim()) {
      const timestamp = new Date().toLocaleString(); // Add timestamp to entry
      setEntries([...entries, { text: newEntry, date: timestamp }]);
      setNewEntry('');
    }
  };

  // Edit an entry
  const handleEditEntry = (index) => {
    const editedEntry = prompt("Edit your gratitude entry:", entries[index].text);
    if (editedEntry) {
      const updatedEntries = entries.map((entry, i) =>
        i === index ? { ...entry, text: editedEntry } : entry
      );
      setEntries(updatedEntries);
    }
  };

  // Delete an entry
  const handleDeleteEntry = (index) => {
    Alert.alert(
      "Delete Entry",
      "Are you sure you want to delete this gratitude entry?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => setEntries(entries.filter((_, i) => i !== index)) }
      ]
    );
  };

  return (
    <ScrollView style={appStyles.container}>
      <Text style={appStyles.title}>Gratitude Journal</Text>

      {/* Gratitude Entry Input Field */}
      <TextInput
        style={appStyles.input}
        value={newEntry}
        onChangeText={setNewEntry}
        placeholder="What are you grateful for?"
        placeholderTextColor="#A8C2C8"
      />

      {/* Add Entry Button */}
      <TouchableOpacity onPress={handleAddEntry} style={appStyles.button}>
        <Text style={{ color: '#FFF' }}>Add Entry</Text>
      </TouchableOpacity>

      {/* Display Gratitude Entries */}
      {entries.length > 0 ? (
        entries.map((entry, index) => (
          <View key={index} style={appStyles.box}>
            <Text style={appStyles.text}>{entry.text}</Text>
            <Text style={styles.timestamp}>{entry.date}</Text>

            {/* Edit and Delete Buttons */}
            <View style={styles.entryButtons}>
              <TouchableOpacity onPress={() => handleEditEntry(index)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteEntry(index)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text style={appStyles.text}>No gratitude entries yet. Add your first one!</Text>
      )}
    </ScrollView>
  );
};

export default GratitudeJournal;
