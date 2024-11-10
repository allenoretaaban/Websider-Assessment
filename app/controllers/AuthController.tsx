import { useReducer, useCallback } from 'react';
import { AuthModel } from '../models/AuthModel';
import { useDebounce } from '../hooks/useDebounce';
import { useThrottle } from '../hooks/useThrottle';
import { useNavigation } from '@react-navigation/native';

const initialState = {
  email: '',
  password: '',
  loading: false,
  error: '',
};

function authReducer(state, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'CLEAR_ERROR':
      return { ...state, error: '' };
    default:
      return state;
  }
}

export const useAuthController = () => {
  const navigation = useNavigation();

  // useReducer for complex state management, handling loading, error, email, and password.
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Debounced email and password states, reducing frequent updates and improving performance.
  const debouncedEmail = useDebounce(state.email, 500);
  const debouncedPassword = useDebounce(state.password, 500);

  // Handlers for setting email and password in the reducer
  const setEmail = useCallback((email) => dispatch({ type: 'SET_EMAIL', payload: email }), []);
  const setPassword = useCallback((password) => dispatch({ type: 'SET_PASSWORD', payload: password }), []);

  // Handler to set error message
  const setError = useCallback((error) => dispatch({ type: 'SET_ERROR', payload: error }), []);

  // Handler to clear error message
  const clearError = useCallback(() => dispatch({ type: 'CLEAR_ERROR' }), []);

  const handleLogin = useThrottle(async () => {
    // Check if email or password is empty and set an appropriate error message
    if (!debouncedEmail || !debouncedPassword) {
      setError('Both email and password are required');
      return; // Exit early if validation fails
    }

    dispatch({ type: 'SET_LOADING', payload: true });
    clearError();
    try {
      const result = await AuthModel.login(debouncedEmail, debouncedPassword);
      if (result.status === 'success') {
        navigation.navigate('Home');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError(error.message || 'Login failed');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, 2000);

  return {
    ...state,
    setEmail,
    setPassword,
    handleLogin,
  };
};
