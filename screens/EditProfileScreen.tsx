import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import Input from '../components/Input';
import { User } from '../entities/User';
import { updateUser } from '../store/actions/user.actions';

export default function EditProfileScreen() {
    const user = useSelector((state: any ) => state.user.loggedInUser);
    const token = useSelector((state: any ) => state.user.idToken)
    const [textEmail, setTextEmail] = useState(user.email)
    const dispatch = useDispatch();
    const [display, setDisplay] = useState(user.Name) 
    let [photo, setPhoto] = useState(user.profilePicture)
    //console.log(user.email);

    const onSave = () => {
        if (display !== '' && photo !== '') {
            const newUser : User = new User(user.email, display, photo)
            dispatch(updateUser(newUser,token))
        } else {
            alert('ERROR')
        }
    }

    return (
        <View style={styles.container}>
            <Input title="What is your username?"
                inputValue={display}
                setText={setDisplay}
                error="Username cannot be empty"
            />
            <Input title="What is your profilepicture url?"
                inputValue={photo}
                setText={setPhoto}
                error="Username cannot be empty"
            />
            {/* <Input title="Study programme"
                inputValue=""
                error="Study programme cannot be empty" /> */}

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