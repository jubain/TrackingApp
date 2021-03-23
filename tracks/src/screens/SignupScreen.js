import React, { useContext, useEffect, } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
import Navlink from '../components/Navlink'
import { NavigationEvents } from 'react-navigation'

const SignupScreen = () => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin()
  }, [])

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        buttonText="Sign Up"
        onSubmit={signup}
      />
      <Navlink
        routeName='Signin'
        text="Already have an account? Sign in instead"
      />

    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SignupScreen;
