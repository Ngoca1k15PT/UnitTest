import {useNavigation} from '@react-navigation/native';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React, {useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();

  const loginUser = () => {
    setErrorMessage('');
    if (email.length > 0 && password.length > 0) {
        navigation.navigate('Home');
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.signInLabel}>Sign in</Text>
        <TextInput
          testID="emailInputField"
          style={styles.inputFieldStyle}
          placeholder="Enter your email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        {errorMessage && <Text style={styles.errorStyle}>{errorMessage}</Text>}
        <TextInput
          testID="passwordInputField"
          style={styles.inputFieldStyle}
          placeholder="Password"
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Button
          testID="loginButton"
          title="Login"
          color={'blue'}
          onPress={loginUser}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  signInLabel: {fontSize: 30, textAlign: 'center', marginBottom: '20%'},
  inputFieldStyle: {
    padding: 20,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 2,
    width: '100%',
  },
  signUpView: {marginTop: 20, flexDirection: 'row'},
  signInButton: {color: 'blue'},
  errorStyle: {color: 'red', width: '100%', marginTop: -20, marginBottom: 20},
});
