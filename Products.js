import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import ProductItem from './ProductItem';
import { useNavigation } from '@react-navigation/native';

const Products = () => {
  const navigation = useNavigation();

  const listaGaseosas = [
    { image: require('./img/gaseosa1.jpg'), nombre: 'Inn', precio: '$1.00' },
    {
      image: require('./img/gaseosa2.jpg'),
      nombre: 'Coca Cola',
      precio: '$2.45',
    },
    {
      image: require('./img/gaseosa3.jpg'),
      nombre: 'Inca Kola',
      precio: '$2.45',
    },
  ];

  const listaGalletas = [
    {
      image: require('./img/galletas1.webp'),
      nombre: 'Morochas',
      precio: '$0.67',
    },
    {
      image: require('./img/galletas2.webp'),
      nombre: 'SodaV',
      precio: '$0.54',
    },
    { image: require('./img/galletas3.jpg'), nombre: 'Oreo', precio: '0.75' },
  ];
  const listaSnacks = [
    {
      image: require('./img/snacks1.webp'),
      nombre: 'Tostitos',
      precio: '$1.20',
    },
    {
      image: require('./img/snacks2.webp'),
      nombre: 'Piqueo Snax',
      precio: '$1.27',
    },
    {
      image: require('./img/snacks3.webp'),
      nombre: 'Cheetos',
      precio: '$1.23',
    },
  ];

  const listaCategorias = [
    { name: 'Gaseosas', images: listaGaseosas },
    { name: 'Galletas', images: listaGalletas },
    { name: 'Snacks', images: listaSnacks },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const handleProductPress = (product) => {
    const selectedProduct = listaCategorias
      .find((category) => category.name === selectedCategory)
      .images.find((p) => p.nombre === product);

    navigation.navigate('Pay', {
      precio: selectedProduct.precio,
      nombre: selectedProduct.nombre,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Encuentra más de nuestros productos aquí!</Text>
      <Text style={styles.categoryText}>Categorías disponibles</Text>
      <ScrollView horizontal={true}>
        {listaCategorias.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selectedCategory === category.name &&
                styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategoryPress(category.name)}
          >
            <Text style={styles.categoryButtonText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView horizontal={true}>
        {selectedCategory &&
          listaCategorias
            .find((category) => category.name === selectedCategory)
            .images.map((product, index) => (
              <ProductItem
                key={index}
                product={product}
                onPress={() => handleProductPress(product.nombre)}
              />
            ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 15,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'sans-serif',
    marginBottom: 40,
  },
  categoryText: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    marginBottom: 10,
  },
  categoryButton: {
    marginRight: 40,
    padding: 10,
  },
  selectedCategoryButton: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  categoryButtonText: {
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: '#000',
  },
  productContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  product: {
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
});

export default Products;
