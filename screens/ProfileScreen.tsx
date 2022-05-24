import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { StackParamList } from '../typings/navigations';

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "Profile">;

export default function ProfileScreen() {
    const navigation = useNavigation<ScreenNavigationType>();
    const user = useSelector((state: any ) => state.user.loggedInUser);
    return (
        <View style={styles.container}>
            <Image source={{uri:user.photoUrl}} style={{height:100,width:100}}/>
            <Text>Profile Screen</Text>
            <Text>{user.userName}</Text>
            <Button title="Edit profile" onPress={() => navigation.navigate("EditProfile")} />
            <Button
            title="Need some help?"
            onPress={()=>navigation.navigate('Help')}
            ></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})