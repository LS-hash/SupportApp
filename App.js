import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Quotes from './components/Quotes';
import MemoryWall from './components/MemoryWall';
import MoodTracker from './components/MoodTracker';
import GratitudeJournal from './components/GratitudeJournal';
import MusicPlayer from './components/MusicPlayer';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Optional: Use icons in your tabs

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MusicPlayer /> {/* Music player remains at the top level */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Quotes') {
                iconName = focused ? 'ios-book' : 'ios-book-outline';
              } else if (route.name === 'Memory Wall') {
                iconName = focused ? 'ios-images' : 'ios-images-outline';
              } else if (route.name === 'Mood Tracker') {
                iconName = focused ? 'ios-happy' : 'ios-happy-outline';
              } else if (route.name === 'Gratitude Journal') {
                iconName = focused ? 'ios-heart' : 'ios-heart-outline';
              }

              // Return Ionicons with appropriate colors and sizes
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4F9DA6', // Soothing teal for active tab
            tabBarInactiveTintColor: '#8FA7B3', // Muted gray-blue for inactive tabs
            tabBarStyle: {
              backgroundColor: '#F0F5F9', // Light soft background
              borderTopWidth: 0,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontFamily: 'Helvetica', // Soothing sans-serif font
            },
          })}
        >
          <Tab.Screen name="Quotes" component={Quotes} />
          <Tab.Screen name="Memory Wall" component={MemoryWall} />
          <Tab.Screen name="Mood Tracker" component={MoodTracker} />
          <Tab.Screen name="Gratitude Journal" component={GratitudeJournal} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5F5', // A soft, light background color throughout the app
  },
});
