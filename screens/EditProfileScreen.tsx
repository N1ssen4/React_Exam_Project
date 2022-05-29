import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import { User } from '../entities/User';
import { updateUser } from '../store/actions/user.actions';

export default function EditProfileScreen() {
    const user = useSelector((state: any ) => state.user.loggedInUser);
    const token = useSelector((state: any ) => state.user.idToken)
    const dispatch = useDispatch();
    const [username, setUsername] = useState(user.Name) 
    let [ppicture, setPpicture] = useState(user.profilePicture)

    const onSave = () => {
        if (username !== '' && ppicture !== '') {
            const newUser : User = new User(user.email, username, ppicture)
            dispatch(updateUser(newUser,token))
        } else {
            alert('Could not save the user')
        }
    }

    return (
        <View style={styles.container}>
            <Input title="What is your username?"
                inputValue={username}
                setText={setUsername}
                error="Username cannot be empty"
            />
            <Input title="Here you can put a URL for a profilepicture"
                inputValue={ppicture}
                setText={setPpicture}
                error="URL cannot be empty"
            />

            <Button title="Save" onPress={() => {onSave()}} />
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