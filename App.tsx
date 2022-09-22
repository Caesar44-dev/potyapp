// modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

// components
import WelcomeNav from './screens/welcome/welcome';

// contexts
import { AuthProvider } from './context/auth/auth';

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <WelcomeNav />
            </NavigationContainer>
        </AuthProvider>
    );
}
