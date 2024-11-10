# Application Specifications

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

# Installation

## Step 1: Install Dependencies
npm install

## Step 2: To start the Metro bundler
npx react-native start

## Step 3: To run the app on an Android emulator or a physical device: (since it is tested in Android)
npx react-native run-android or npm run android
