import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Alert } from 'react-native';
import { appStyles } from '../src/styles.js'; // Import shared styles

const MemoryWall = () => {
  const [memories, setMemories] = useState([]);
  const [newMemory, setNewMemory] = useState('');

  // Add a new memory
  const handleAddMemory = () => {
    if (newMemory.trim()) {
      const timestamp = new Date().toLocaleString(); // Add timestamp to memory
      setMemories([...memories, { text: newMemory, date: timestamp }]);
      setNewMemory('');
    }
  };

  // Edit a memory
  const handleEditMemory = (index) => {
    const editedMemory = prompt("Edit your memory:", memories[index].text);
    if (editedMemory) {
      const updatedMemories = memories.map((memory, i) =>
        i === index ? { ...memory, text: editedMemory } : memory
      );
      setMemories(updatedMemories);
    }
  };

  // Delete a memory
  const handleDeleteMemory = (index) => {
    Alert.alert(
      "Delete Memory",
      "Are you sure you want to delete this memory?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => setMemories(memories.filter((_, i) => i !== index)) }
      ]
    );
  };

  return (
    <ScrollView style={appStyles.container}>
      <Text style={appStyles.title}>Memory Wall</Text>

      {/* Memory Input Field */}
      <TextInput
        style={appStyles.input}
        value={newMemory}
        onChangeText={setNewMemory}
        placeholder="Add a memory..."
        placeholderTextColor="#A8C2C8"
      />

      {/* Add Memory Button */}
      <TouchableOpacity onPress={handleAddMemory} style={appStyles.button}>
        <Text style={{ color: '#FFF' }}>Add Memory</Text>
      </TouchableOpacity>

      {/* Display Memories */}
      {memories.length > 0 ? (
        memories.map((memory, index) => (
          <View key={index} style={appStyles.box}>
            <Text style={appStyles.text}>{memory.text}</Text>
            <Text style={appStyles.timestamp}>{memory.date}</Text>

            {/* Edit and Delete Buttons */}
            <View style={appStyles.memoryButtons}>
              <TouchableOpacity onPress={() => handleEditMemory(index)}>
                <Text style={appStyles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteMemory(index)}>
                <Text style={appStyles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text style={appStyles.text}>No memories yet. Add your first one!</Text>
      )}
    </ScrollView>
  );
};

export default MemoryWall;
