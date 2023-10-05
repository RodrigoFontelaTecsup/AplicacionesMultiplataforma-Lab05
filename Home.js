import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To Your Favorite Store!</Text>
      <Image source={require('./img/logoTienda.webp')} style={styles.image} />
      <Text style={{ fontSize: 35, marginTop: 50 }}>
        Aprovecha estas ultimas ofertas!
      </Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('./img/oferta1.jpg')}
          style={styles.offerImage}
        />
        <Image
          source={require('./img/oferta2.jpg')}
          style={styles.offerImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 50,
    fontFamily: 'sans-serif',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  offerImage: {
    marginTop: 30,
    width: 330,
    height: 330,
  },
});

export default Home;
