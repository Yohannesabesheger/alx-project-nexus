import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 130,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 8,
    marginTop: 6,
  },
  price: {
    fontSize: 13,
    fontWeight: '600',
    marginHorizontal: 8,
    marginBottom: 10,
    color: '#007AFF',
  },
});
