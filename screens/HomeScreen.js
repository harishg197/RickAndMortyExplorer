import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rick and Morty Character Explorer</Text>
            <Text style={styles.info}>Welcome to the Character Explorer App!</Text>
            <View style={styles.spacer} />
            <View style={styles.buttonContainer}>
                <Button
                    title="View Characters"
                    onPress={() => navigation.navigate('CharacterList')}
                />
            </View>
            <Text style={styles.info}>HARISH G</Text>
            <Text style={styles.info}>BTech IT</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', // Change this to 'center' to center everything
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    info: {
        fontSize: 18,
        marginVertical: 5,
    },
    spacer: {
        flex: 1, // This will push the button to the center
    },
    buttonContainer: {
        marginVertical: 20, // Adds some space above and below the button
    },
});

export default HomeScreen;


