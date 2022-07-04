import React from 'react';
import { Button, ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
      <ThemeProvider>
        <SafeAreaProvider>
          <Button title="Hey!" />
        </SafeAreaProvider>
      </ThemeProvider>
  );
}