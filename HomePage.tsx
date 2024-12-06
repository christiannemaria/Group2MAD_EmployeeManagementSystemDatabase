import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { Button, SafeAreaView, Text, TextInput, View, StyleSheet, ImageBackground } from 'react-native';

const LoginPage = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Tasks');
    };

    return (
        <ImageBackground
            source={{ uri: '' }}
            style={styles.backgroundImage}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.HeaderText}>
                        Group2MAD
                    </Text>
                    <Text style={styles.welcomeText}>
                        Welcome! Please log in.
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <Button
                        onPress={handleLogin}
                        title="Login"
                        color="#9cded8"
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    HeaderText: {
        fontSize: 30,
        padding: 10,
        marginBottom: 10,
        textAlign: 'center',
        color: '#9cded8',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        width: '90%',
        maxWidth: 400, // Ensures responsiveness
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for better readability
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 20,
        padding: 10,
        marginBottom: 20,
        textAlign: 'center',
        color: '#9cded8',
    },
    input: {
        width: '100%',
        padding: 12,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#9cded8',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
});

export default LoginPage;
