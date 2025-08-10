import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;
const itemWidth = (screenWidth - 48) / 2; // 2 columns + spacing


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#f9f9f9",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
  },
  searchInput: {
    marginHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    elevation: 2,
  },
  grid: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  card: {
    width: itemWidth,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: itemWidth,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#222",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#009688",
  },
});
export default styles;