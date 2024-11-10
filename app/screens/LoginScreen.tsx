/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAuthController } from '../controllers/AuthController';
import styles from '../styles/styles';
import OptimizedInput from '../components/OptimizedInput';
import AppButton from '../components/AppButton';

const LoginForm = () => {
  const { email, password, loading, error, setEmail, setPassword, handleLogin } = useAuthController();

  // useCallback ensures that `handleEmailChange` and `handlePasswordChange` functions
  // are only re-created if `setEmail` or `setPassword` change, reducing re-renders.
  const handleEmailChange = useCallback((text) => setEmail(text), [setEmail]);
  const handlePasswordChange = useCallback((text) => setPassword(text), [setPassword]);

  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Login Page</Text>
      <OptimizedInput
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Userame"
      />
      <OptimizedInput
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="Password"
        secureTextEntry
      />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <AppButton title="Login" onPress={handleLogin}  />
      )}
    </View>
  );
};

export default LoginForm;
