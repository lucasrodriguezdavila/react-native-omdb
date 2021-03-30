import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/colors";
import { Montserrat } from "../theme/Fonts";
import OmdbURLGenerator from "../api/omdbAPI";

const FilmItem = ({ film, navigation }) => {
  const { imdbID } = film;
  const [fullFilm, setFullFilm] = useState({});
  const { Title, Runtime, Genre, imdbRating, Poster } = fullFilm;

  useEffect(() => {
    const handleGetFullFilm = async () => {
      try {
        const fetchedFilm = await new OmdbURLGenerator()
          .getByImdbID(imdbID)
          .fullPlot()
          .fetchOneMovie();
        setFullFilm(fetchedFilm);
      } catch (error) {
        alert(error.message);
      }
    };
    handleGetFullFilm();
  }, [imdbID]);

  const handleOnPress = () => {
    navigation.navigate("FilmDetails", { film: fullFilm });
  };

  if (!fullFilm) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: Poster }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {Title}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.duration}>{Runtime}</Text>
          <Text style={styles.categoryContainer}>{Genre}</Text>
          <View style={styles.starContainer}>
            <Rating rating={imdbRating} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Rating = ({ rating }) => {
  const parsed = parseFloat(rating);
  if (!rating) {
    return null;
  }
  if (!parsed > 0) {
    return <Text style={styles.star}>No rating</Text>;
  }
  const starsAmount = Math.round(parsed / 2);
  const filledStars = new Array(starsAmount).fill(null);
  const emptyStars = new Array(5 - starsAmount).fill(null);

  return (
    <>
      {filledStars.map((v, i) => {
        return <Icon key={i} style={styles.star} name="star" size={16} />;
      })}
      {emptyStars.map((v, i) => (
        <Icon key={i} style={styles.starEmpty} name="star" size={16} />
      ))}
    </>
  );
};

export default React.memo(FilmItem);

const styles = StyleSheet.create({
  categoryContainer: {
    color: Colors.white,
    flexWrap: "wrap",
    fontFamily: Montserrat.light,
    marginTop: 2,
    maxWidth: 250,
  },
  container: {
    flexDirection: "row",
    height: 155,
    marginTop: 20,
    width: "100%",
  },
  detailsContainer: {
    width: "100%",
  },
  duration: {
    color: Colors.blue[100],
    fontFamily: Montserrat.medium,
    fontSize: 16,
  },
  image: {
    backgroundColor: Colors.white,
    borderRadius: 7,
    height: "100%",
    width: 93,
  },
  infoContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    marginLeft: 20,
    paddingBottom: 12,
    paddingTop: 8,
  },
  star: {
    color: Colors.yellow[200],
    height: 18,
    marginRight: 9,
    width: 18,
  },
  starContainer: {
    flexDirection: "row",
    height: 18,
    marginTop: 6,
  },
  starEmpty: {
    color: Colors.blue[400],
    height: 18,
    marginRight: 9,
    width: 18,
  },
  title: {
    color: Colors.white,
    fontFamily: Montserrat.medium,
    fontSize: 20,
  },
  titleContainer: {
    width: "100%",
  },
});
