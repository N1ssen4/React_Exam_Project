import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/user.actions';

export default function HomeScreen() {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title="Logout" onPress={() => dispatch(logout())} />
            <Text>Welcome to the CBS App! </Text>
            <Text>On this App you can create Chatrooms in the 'Chat' tab, Events in the 'Discover' tab and get help in the 'Menu' tab</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center'
    

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