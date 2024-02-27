// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PageIndicators from './PageIndicators';

const HomeScreen = ({ navigation }) => {

  const totalPages = 4; // Total de páginas
  const currentPage = 0; // Página atual (0-indexed)

  return (
    <View style={styles.container}>
      <Image
        source={require('D:/Thinkless/BarberShop/MeuApp/images/movel.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Bem vindo ao Barber Shop</Text>
      <Text style={styles.text}>Antes de você completar o uso do app
        gostariamos de conhecer um pouco mais
        da sua barbearia!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Segunda')}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  image: {
    width: 200, // Defina o tamanho da imagem conforme desejado
    height: 200, // Defina o tamanho da imagem conforme desejado
    marginBottom: 20,
    marginTop: 200,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50,
    color: 'white',
  },
  button: {
    backgroundColor: 'white', // Cor de fundo do botão
    paddingHorizontal: 40, // Espaçamento horizontal dentro do botão
    paddingVertical: 10, // Espaçamento vertical dentro do botão
    borderRadius: 10, // Borda arredondada do botão
  },
  buttonText: {
    color: 'black', // Cor do texto do botão
    fontWeight: 'bold',
    fontSize: 20,
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20, // Espaçamento entre o conteúdo e os indicadores
  },
  tabBar: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: 'black'
  },
});

export default HomeScreen;


