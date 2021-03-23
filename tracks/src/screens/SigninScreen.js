import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import Navlink from '../components/Navlink'
import { Context as AuthContext } from '../context/AuthContext'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
      />
      <AuthForm
        headerText='Sign in to your Account'
        errorMessage={state.errorMessage}
        onSubmit={signin}
        buttonText="Sign in"
      />
      <Navlink
        routeName='Signup'
        text="Dont have account? Sign up instead"
      />
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SigninScreen;
