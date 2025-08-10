import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Text,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function EditProfileScreen() {
  const router = useRouter();

  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [address, setAddress] = useState('123 Main Street, Springfield, USA');

  const saveProfile = () => {
    Alert.alert('Success', 'Profile saved successfully!', [
      { text: 'OK', onPress: () => router.back() },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </Pressable>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        value={address}
        onChangeText={setAddress}
        placeholder="Delivery Address"
        multiline
        numberOfLines={3}
      />
      <Button title="Save" onPress={saveProfile} />
      <View style={{ height: 10 }} />
      <Button title="Cancel" color="gray" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    color: '#007AFF',
    fontSize: 18,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 24,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
});
