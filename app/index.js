import React from 'react';
import { ScrollView, Pressable, Text, TextInput, View , KeyboardAvoidingView, Platform} from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page() {
    const [name, onChangeName] = React.useState("");
    const [noun, onChangeNoun] = React.useState("");
    const [event, onChangeEvent] = React.useState("");

    const clearInputs = () => {
        onChangeName("");
        onChangeNoun("");
        onChangeEvent("");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={Styles.keyboardAvoidingView}
        > 
            <View style={Styles.page}>
                <Text style={Styles.welcomeText}>
                    Please enter your information below and press "Make my hall pass" to generate a personalized hall pass.{'\n'}
                    Use the "Clear" button to reset the input fields.
                </Text>

                <TextInput
                    style={Styles.input}
                    onChangeText={onChangeName}
                    value={name}
                    placeholder="Name"
                />
                <TextInput
                    style={Styles.input}
                    onChangeText={onChangeNoun}
                    value={noun}
                    placeholder="Noun"
                />
                <TextInput
                    style={Styles.input}
                    onChangeText={onChangeEvent}
                    value={event}
                    placeholder="Event"
                />
                <Link
                    style={Styles.button}
                    href={{
                        pathname: "/hallpass",
                        params: { name, noun, event }
                    }} asChild
                >
                    <Pressable >
                        <Text>Make my hall pass</Text>
                    </Pressable>
                </Link>

                <Pressable style={Styles.button} onPress={clearInputs}>
                    <Text>Clear</Text>
                </Pressable>
            </View> 
        </KeyboardAvoidingView>
    )
}