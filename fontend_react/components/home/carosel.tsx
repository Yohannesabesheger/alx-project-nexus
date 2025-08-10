import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9; // 90% of screen width

const slides = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OzD9feksaS-PEYurcxfPXws24LmXwWlUqQ&s",
  "https://media.istockphoto.com/id/1346661870/photo/baskets-traditional-handicraft-products.jpg?s=612x612&w=0&k=20&c=CNV8ONrT8EoZFMPpdkHNOPqk2vTbLitB9n9FfmsLA88=",
  "https://media.istockphoto.com/id/586934716/photo/hands-of-craftsman-carve-with-a-gouge.jpg?s=612x612&w=0&k=20&c=lxSc5HKR-8VJ9DsDRnnjjtDPuC0Wb6MlVHVTLjI4naQ=",
  "https://media.istockphoto.com/id/694329856/photo/blue-pottery-works-in-okinawa.jpg?s=612x612&w=0&k=20&c=DVZBgyJPJ8WoMyhyYkM2R6qjNI57dd6UjQO96NsAszg=",
  "https://media.istockphoto.com/id/1176156220/photo/tourist-buying-at-craft-fair-in-olinda-pernambuco.jpg?s=612x612&w=0&k=20&c=CY1JcpfhPpzremLiCNcZzTMlMRr2bL2BOR1f7a2CXU0="
];

const CarouselSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Featured Products</Text>
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        ref={flatListRef}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.floor(event.nativeEvent.contentOffset.x / ITEM_WIDTH);
          setCurrentIndex(newIndex);
        }}
      />
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default CarouselSlider;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#333',
  },
  slide: {
    width: ITEM_WIDTH,
    marginHorizontal: (width - ITEM_WIDTH) / 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  pagination: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    margin: 5,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: '#333',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});
