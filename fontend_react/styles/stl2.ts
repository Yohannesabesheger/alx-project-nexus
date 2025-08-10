import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerWithPadding: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  productListContainer: {
    paddingBottom: 100,
  },
  productCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    flex: 0.48,
    alignItems: "center",
  },
  productImage: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "teal",
  },
  noResultsText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#888",
  },
});
