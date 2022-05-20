import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function DiscoverScreen() {
    
    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Discover Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    title:{
        marginTop: 32,
        paddingVertical: 25,
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 1,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
        },
})