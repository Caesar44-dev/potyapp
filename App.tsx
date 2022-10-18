// modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

// components
import WelcomeNav from './screens/welcome/welcome';

// contexts
import { AuthProvider } from './context/auth/auth';
import NavTabs from './components/navigation/navTabs';

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                {/* <WelcomeNav /> */}
                <NavTabs />
            </AuthProvider>
        </NavigationContainer>
    );
}
