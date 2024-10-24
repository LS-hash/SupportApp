import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { appStyles } from '../src/styles.js'; 

const comfortingQuotes = [
  "Grief is the price we pay for love.",
  "Those we love never truly leave us.",
  "When someone you love becomes a memory, the memory becomes a treasure.",
  "It’s okay to be sad, but it’s also okay to remember the happy times.",
  "The reality is that you will grieve forever. You will not 'get over' the loss of a loved one; you will learn to live with it.",
  "What we once enjoyed and deeply loved we can never lose, for all that we love deeply becomes a part of us.",
  "The only cure for grief is to grieve.",
  "Tears shed for another person are not a sign of weakness. They are a sign of a pure heart.",
  "Although it's difficult today to see beyond the sorrow, may looking back in memory help comfort you tomorrow.",
  "Grief is like the ocean; it comes on waves ebbing and flowing. Sometimes the water is calm, and sometimes it is overwhelming.",
  "Grief never ends, but it changes. It’s a passage, not a place to stay. Grief is not a sign of weakness, nor a lack of faith. It is the price of love.",
  "Healing takes time, and asking for help is a courageous step.",
  "May you find comfort in knowing you are not alone in your journey of grief.",
  "The pain you feel is a reflection of the love you gave.",
  "Although no words can ease the loss you bear, know that you are in our thoughts and prayers.",
  "Those we love and lose are always connected by heartstrings into infinity.",
  "Gone from our sight, but never from our hearts.",
  "There are no goodbyes for us. Wherever you are, you will always be in my heart."
];

const Quotes = () => {
  return (
    <ScrollView style={appStyles.container}>
      {comfortingQuotes.map((quote, index) => (
        <View key={index} style={appStyles.box}>
          <Text style={appStyles.text}>{quote}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Quotes;
