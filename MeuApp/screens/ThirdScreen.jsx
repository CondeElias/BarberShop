import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import PageIndicators from './PageIndicators';

const ThirdScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tempo, setTempo] = useState('');
  const [cards, setCards] = useState([]);

  const handleComecarPress = () => {
    if (nome !== '' && valor !== '' && tempo !== '') {
      const newCard = { nome, valor, tempo };
      setCards([...cards, newCard]);
    }
  };

  const handleExcluirCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  const formatarValor = (valor) => {
    // Verifica se o valor está vazio
    if (!valor) return '';

    // Remove caracteres não numéricos, exceto vírgula e ponto
    const numeroLimpo = valor.replace(/[^\d,.]/g, '');

    // Separa os números antes e depois da vírgula
    const [parteInteira, parteDecimal] = numeroLimpo.split(',');

    // Formata a parte inteira com a máscara de moeda
    const parteInteiraFormatada = parteInteira.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    // Retorna o valor formatado
    return `R$ ${parteInteiraFormatada}${parteDecimal ? ',' + parteDecimal.slice(0, 2) : ''}`;
  };

  const handleValorChange = (valor) => {
    // Define o novo valor formatado
    setValor(formatarValor(valor));
  };

  const totalPages = 4; // Total de páginas
  const currentPage = 1; // Página atual (0-indexed)

  return (
    <View style={styles.container}>
      <Image
        source={require('D:/Thinkless/BarberShop/MeuApp/images/movel.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Configurando seus serviços</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Nome"
            placeholderTextColor="white"
          />
          <View style={styles.inputRow}>
            <TextInput
              style={[styles.input, styles.inputValor]}
              value={valor}
              onChangeText={handleValorChange}
              placeholder="Valor"
              placeholderTextColor="white"
              keyboardType='numeric'
            />
            <TextInput
              style={[styles.input, styles.inputTempo]}
              value={tempo}
              onChangeText={setTempo}
              placeholder="Tempo (Minutos)"
              placeholderTextColor="white"
              keyboardType='numeric'
            />
          </View>
          <TouchableOpacity style={styles.button2} onPress={handleComecarPress}>
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>
          <View style={styles.cardContainer}>
            {cards.map((card, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.cardContent}>
                  <Text>• Nome: {card.nome}</Text>
                  <Text>• Valor: {card.valor}</Text>
                  <Text>• Tempo: {card.tempo} Minutos</Text>
                </View>
                <TouchableOpacity onPress={() => handleExcluirCard(index)}>
                  <Text style={styles.excluir}>...</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Segunda')}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <PageIndicators totalPages={totalPages} currentPage={currentPage} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quarta')}>
          <Text style={styles.buttonText}>Próxima</Text>
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
    marginBottom: 20,
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
    marginBottom: 100,
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
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputValor: {
    flex: 1,
    marginRight: 10,
  },
  inputTempo: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  button2: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // 2% menos que 50% para lidar com espaçamento
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  cardContent: {
    marginBottom: 10,
  },
  excluir: {
    alignSelf: 'flex-end',
    fontSize: 20,
    color: 'red',
  },
});

export default ThirdScreen;
