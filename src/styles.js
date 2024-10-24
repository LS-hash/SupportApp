import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5F7', // A calming, light grey-blue for the overall background
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A8C2C8', // Subtle light teal for the input field borders
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#E9F2F3', // Soft blue-green for input backgrounds
    borderRadius: 12,
    fontFamily: 'Helvetica',
    color: '#3D5A6B', // Subtle dark gray-blue text for input fields
  },
  text: {
    color: '#3D5A6B', // Slightly darker slate blue for calming text
    fontSize: 18,
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#E9F2F3', // Light blue-green for boxes (e.g., mood logs, memories)
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    borderColor: '#A8C2C8', // Subtle teal for box borders
    borderWidth: 1,
    shadowColor: '#000', // Soft shadow for depth
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  button: {
    backgroundColor: '#4A7C89', // Deep calming teal for buttons
    padding: 12,
    borderRadius: 12,
    textAlign: 'center',
    color: '#FFFFFF', // White text for contrast on buttons
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
  dateText: {
    fontSize: 18,
    color: '#3D5A6B', // Slate blue text for dates to keep it calming
    textAlign: 'center',
    marginVertical: 12,
    fontFamily: 'Helvetica',
  },
  calendar: {
    marginVertical: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#A8C2C8', // Light teal for calendar borders
    backgroundColor: '#F2F5F7',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#3D5A6B', // Slate blue for section titles, to maintain calm and focus
    marginVertical: 15,
    fontFamily: 'Helvetica-Bold', // Slightly bolded to differentiate section titles
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    flexWrap: 'wrap',
  },
  emoji: {
    fontSize: 42, // Slightly larger emoji size for easy selection
    marginBottom: 12,
    color: '#4A7C89', // Use deep calming teal for emojis to blend with the theme
  },
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
  selectedEmoji: {
    borderColor: '#A8C2C8', // Light teal to highlight the selected emoji
    borderWidth: 2,
    borderRadius: 12,
    padding: 8,
  },
  moodText: {
    textAlign: 'center',
    color: '#3D5A6B', // Consistent slate blue for descriptions of mood
    fontSize: 16,
    fontFamily: 'Helvetica',
    marginVertical: 10,
  },
  loggedMoodText: {
    textAlign: 'center',
    color: '#3D5A6B', // Slightly darker for logged mood text to maintain focus
    fontSize: 18,
    fontFamily: 'Helvetica-Bold', // Bolder for contrast
    marginTop: 20,
  },
  emojiAnnotation: {
    fontSize: 14,
    color: '#3D5A6B', // Keep annotations calm and consistent
    textAlign: 'center',
    marginTop: -5,
    marginBottom: 15,
  },

  // Memory Wall-specific styles
  timestamp: {
    fontSize: 12,
    color: '#A8C2C8', // Light teal color for the timestamp
    textAlign: 'right',
    marginTop: 8,
  },
  memoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    color: '#4A7C89', // Same deep calming teal for edit button
    fontSize: 14,
  },
  deleteButton: {
    color: '#F76C6C', // Red for delete button, to indicate a destructive action
    fontSize: 14,
  },

  // Navbar and music player:
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4A7C89', // Deep teal for a calming navbar
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: '#A8C2C8',
  },
  navItem: {
    color: '#FFFFFF', // White text for clear contrast
    fontSize: 16,
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
  navItemActive: {
    color: '#A8C2C8', // Highlight active item with soft teal
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
  },
  musicPlayerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3D5A6B', // Slate blue for music player background
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  musicPlayerButton: {
    padding: 12,
    backgroundColor: '#A8C2C8', // Soft teal buttons for music controls
    borderRadius: 50,
  },
  musicPlayerIcon: {
    color: '#FFFFFF', // White icons for clarity
    fontSize: 24,
  },
  musicTitle: {
    color: '#FFFFFF', // White text for song titles
    fontSize: 16,
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
  // Music Player Styles
  musicPlayerContainer: {
    padding: 20,
    backgroundColor: '#F2F5F7', // Soothing light grey-blue background
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 20,
    alignItems: 'center',
  },
  musicTitle: {
    fontSize: 18,
    color: '#3D5A6B', // Calm slate blue for the song title
    fontFamily: 'Helvetica-Bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  musicControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Full width to evenly distribute buttons
    paddingHorizontal: 20,
  },
  // GratitudeJournal
  timestamp: {
    fontSize: 12,
    color: '#A8C2C8',
    textAlign: 'right',
    marginTop: 8,
  },
  entryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    color: '#4A7C89',
    fontSize: 14,
  },
  deleteButton: {
    color: '#F76C6C',
    fontSize: 14,
  },
});
