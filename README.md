# Implementation Guide

## Debouncing and Throttling:
1. Debouncing is used on the email and password inputs to reduce frequent state updates and API calls (500ms delay).
2. Throttling is applied to the login button to limit repeated clicks, ensuring the login action is triggered only every 2 seconds.

## React Navigation:
1. The useNavigation hook is used to navigate to the Home screen upon successful login.

## Empty Fields Validation:
1. If either the email or password field is empty, an error message is shown, and the login attempt is prevented.

## State Management:
1. useReducer is used for managing form state (email, password, loading, error) to centralize and optimize state updates.

## Error and Loading States:

1. Displays error messages and loading indicators based on the login process (e.g., invalid credentials or network errors).