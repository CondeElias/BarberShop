import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput, Switch } from 'react-native';
import PageIndicators from './PageIndicators';

const FifthScreen = ({ navigation }) => {

  const totalPages = 4; // Total de páginas
  const currentPage = 3; // Página atual (0-indexed)

  const [agendamentosPorPessoa, setAgendamentosPorPessoa] = useState(false);
  const [tempoLimiteAgendamento, setTempoLimiteAgendamento] = useState(false);
  const [tempoLimiteCancelamento, setTempoLimiteCancelamento] = useState(false);
  const [quantidadeCancelamentos, setQuantidadeCancelamentos] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('D:/Thinkless/BarberShop/MeuApp/images/movel.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Configurações Avançadas</Text>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>Quantidade de agendamentos por pessoa em aberto?</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#57bb68" }}
              thumbColor={agendamentosPorPessoa ? "#57bb68" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setAgendamentosPorPessoa(!agendamentosPorPessoa)}
              value={agendamentosPorPessoa}
            />
          </View>
          {agendamentosPorPessoa &&
            <View style={styles.answerContainer}>
              <TextInput
                style={styles.answerInput}
                placeholder="Quantos?"
                placeholderTextColor="white"
                keyboardType='numeric'
              />
            </View>
          }
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>Tempo limite de agendamento?</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#57bb68" }}
              thumbColor={tempoLimiteAgendamento ? "#57bb68" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setTempoLimiteAgendamento(!tempoLimiteAgendamento)}
              value={tempoLimiteAgendamento}
            />
          </View>
          {tempoLimiteAgendamento &&
            <View style={styles.answerContainer}>
              <TextInput
                style={styles.answerInput}
                placeholder="Quanto tempo?"
                placeholderTextColor="white"
                keyboardType='numeric'
              />
            </View>
          }
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>Tempo limite para cancelamento?</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#57bb68" }}
              thumbColor={tempoLimiteCancelamento ? "#57bb68" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setTempoLimiteCancelamento(!tempoLimiteCancelamento)}
              value={tempoLimiteCancelamento}
            />
          </View>
          {tempoLimiteCancelamento &&
            <View style={styles.answerContainer}>
              <TextInput
                style={styles.answerInput}
                placeholder="Quanto tempo?"
                placeholderTextColor="white"
                keyboardType='numeric'
              />
            </View>
          }
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>Quantidade de cancelamentos permitidas por cliente por mês?</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#57bb68" }}
              thumbColor={quantidadeCancelamentos ? "#57bb68" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setQuantidadeCancelamentos(!quantidadeCancelamentos)}
              value={quantidadeCancelamentos}
            />
          </View>
          {quantidadeCancelamentos &&
            <View style={styles.answerContainer}>
              <TextInput
                style={styles.answerInput}
                placeholder="Quantos?"
                placeholderTextColor="white"
                keyboardType='numeric'
              />
            </View>
          }
        </View>
      </ScrollView>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quarta')}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <PageIndicators totalPages={totalPages} currentPage={currentPage} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sexta')}>
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
    marginBottom: 100, // Adiciona margem inferior para a tabBar não ficar por cima dos campos de resposta
    justifyContent: 'space-between',
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
  scrollContainer: {
    flex: 1,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  questionText: {
    flex: 1,
    color: 'white',
  },
  answerContainer: {
    marginLeft: 20,
  },
  answerInput: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
  },
});

export default FifthScreen;
