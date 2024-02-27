// screens/SecondScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import PageIndicators from './PageIndicators';

const SecondScreen = ({ navigation }) => {

  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [pontoReferencia, setPontoReferencia] = useState('');
  const [telefone, setTelefone] = useState('');

  const totalPages = 4; // Total de páginas
  const currentPage = 0; // Página atual (0-indexed)

  return (
    <View style={styles.container}>
      <Image
        source={require('D:/Thinkless/BarberShop/MeuApp/images/movel.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Configurações Basicas</Text>
          <TextInput
            style={styles.input}
            value={endereco}
            onChangeText={setEndereco}
            placeholder="Endereço"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            value={cep}
            onChangeText={setCep}
            placeholder="CEP"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            value={pontoReferencia}
            onChangeText={setPontoReferencia}
            placeholder="Ponto de Referência"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            value={telefone}
            onChangeText={setTelefone}
            placeholder="Telefone"
            placeholderTextColor="white"
          />
          </View >
      </ScrollView>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Primeira')}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
          <PageIndicators totalPages={totalPages} currentPage={currentPage} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Terceira')}>
          <Text style={styles.buttonText}>Proxima</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginBottom: 40,
    paddingHorizontal: 10,
    color: 'white',
  },
  image: {
    width: 80, // Defina o tamanho da imagem conforme desejado
    height: 80, // Defina o tamanho da imagem conforme desejado
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',

  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: 'black',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 250,
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white', // Cor de fundo do botão
    paddingHorizontal: 20, // Espaçamento horizontal dentro do botão
    paddingVertical: 10, // Espaçamento vertical dentro do botão
    borderRadius: 10, // Borda arredondada do botão
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 15,
    backgroundColor: 'black'
},
});

export default SecondScreen;
