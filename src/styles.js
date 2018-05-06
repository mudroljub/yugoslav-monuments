import {StyleSheet, Dimensions} from "react-native"

const { width, height } = Dimensions.get("window")
const CARD_HEIGHT = height / 4
const CARD_WIDTH = CARD_HEIGHT - 50

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  geolocation: {
    top: 60,
    position: "absolute",
    left: 20,
    height: 40,
    width: 40,
  },
  scrollView: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
})
