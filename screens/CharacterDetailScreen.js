import React from 'react';
import { View, Text, Image } from 'react-native';

const CharacterDetailScreen = ({ route }) => {
  const { character } = route.params; // Destructure directly

  return (
    <View style={{ padding: 20 }}>
      <Image
        source={{ uri: character.image }}
        style={{ width: 200, height: 200, borderRadius: 10 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>
        {character.name}
      </Text>
      <Text>Species: {character.species}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Gender: {character.gender}</Text>
    </View>
  );
};

export default CharacterDetailScreen;
