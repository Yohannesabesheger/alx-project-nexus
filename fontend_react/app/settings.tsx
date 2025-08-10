import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function SettingsPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>⚙️ Settings Page</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
