import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';

const LoginScreen = ({navigation}) => {
  const [authLogin, setAuthLogin] = useState(true);
  const [authSignup, setAuthSignup] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const onSubmit = () => {
    if (emailText === '' && passwordText === '') {
      alert('Enter all field!!');
    } else {
      navigation.navigate('BottomTab');
      setEmailText('');
      setPasswordText('');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.image}>
          <Image source={require('../images/logo.png')} />
        </View>
        <View style={styles.authButton}>
          <TouchableOpacity
            onPress={() => {
              setAuthLogin(true);
              setAuthSignup(false);
            }}>
            <Text
              style={authLogin === true ? styles.authBorder : styles.authText}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAuthSignup(true);
              setAuthLogin(false);
            }}>
            <Text
              style={authSignup === true ? styles.authBorder : styles.authText}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.userArea}>
          <Text style={styles.email}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="Enter your email address"
            onChangeText={value => setEmailText(value)}
            value={emailText}
          />
          <Text style={styles.email}>Password</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="Enter your password"
            onChangeText={value => setPasswordText(value)}
            value={passwordText}
            secureTextEntry={true}
          />
          {authLogin === true ? (
            <TouchableOpacity>
              <Text style={{color: '#FA4A0C'}}>Forget Passcode?</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
        {authLogin === true ? (
          <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
            <Text style={styles.loginLabel}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
            <Text style={styles.loginLabel}>Signup</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  box1: {
    flex: 2,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    flexDirection: 'column',
  },
  image: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box2: {
    flex: 2,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
  authText: {
    fontSize: 18,
    lineHeight: 21,
    color: 'black',
  },
  authBorder: {
    borderBottomWidth: 3,
    borderBottomColor: '#FA4A0C',
    fontSize: 18,
    lineHeight: 21,
    color: 'black',
  },

  email: {
    fontWeight: '600',
    fontSize: 15,
    color: '#000000',
    opacity: 0.4,
  },
  input: {
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
    marginBottom: 30,
  },
  userArea: {
    flex: 3,
  },
  loginButton: {
    paddingVertical: 20,
    backgroundColor: '#FA4A0C',
    marginHorizontal: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginLabel: {
    fontWeight: '600',
    color: 'white',
    fontSize: 18,
  },
});

export default LoginScreen;
