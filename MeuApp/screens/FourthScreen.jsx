import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Switch, Button, Platform, Image } from 'react-native';
import PageIndicators from './PageIndicators';

const FourthScreen = ({ navigation }) => {
    const totalPages = 4; // Total de páginas
    const currentPage = 2; // Página atual (0-indexed)

    const [horarios, setHorarios] = useState([
        { dia: 'Segunda-feira', inicio: '', fim: '', descansos: [] },
        { dia: 'Terça-feira', inicio: '', fim: '', descansos: [] },
        { dia: 'Quarta-feira', inicio: '', fim: '', descansos: [] },
        { dia: 'Quinta-feira', inicio: '', fim: '', descansos: [] },
        { dia: 'Sexta-feira', inicio: '', fim: '', descansos: [] },
        { dia: 'Sábado', inicio: '', fim: '', descansos: [] },
        { dia: 'Domingo', inicio: '', fim: '', descansos: [] },
    ]);

    const toggleDia = (index) => {
        const updatedHorarios = [...horarios];
        updatedHorarios[index].toggle = !updatedHorarios[index].toggle;
        setHorarios(updatedHorarios);
    };

    const handleInputChange = (text, index, campo) => {
        const updatedHorarios = [...horarios];
        if (campo === 'inicio') {
            updatedHorarios[index].inicio = formatarHorario(text);
        } else if (campo === 'fim') {
            updatedHorarios[index].fim = formatarHorario(text);
        }
        setHorarios(updatedHorarios);
    };

    const formatarHorario = (text) => {
        let formattedTime = '';
        if (text.length === 2 && !text.includes(':')) {
            formattedTime = text + ':';
        } else if (text.length > 2 && !text.includes(':')) {
            formattedTime = text.substring(0, 2) + ':' + text.substring(2);
        } else {
            formattedTime = text;
        }
        return formattedTime;
    };

    const addDescanso = (index) => {
        const updatedHorarios = [...horarios];
        updatedHorarios[index].descansos.push({ inicio: '', fim: '' });
        setHorarios(updatedHorarios);
    };

    const deleteDescanso = (diaIndex, descansoIndex) => {
        const updatedHorarios = [...horarios];
        updatedHorarios[diaIndex].descansos.splice(descansoIndex, 1);
        setHorarios(updatedHorarios);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('D:/Thinkless/BarberShop/MeuApp/images/movel.jpg')}
                style={styles.image}
                resizeMode="contain"
            />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.content}>
                    <Text style={styles.title}>Configurando seus horários</Text>
                    {horarios.map((dia, index) => (
                        <View key={index} style={styles.diaContainer}>
                            <View style={styles.diaHeader}>
                                <Text style={styles.diaText}>{dia.dia}</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#57bb68" }}
                                    thumbColor={dia.toggle ? "#57bb68" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => toggleDia(index)}
                                    value={dia.toggle}
                                />
                            </View>
                            {dia.toggle && (
                                <>
                                    <Text style={styles.message}>Horários aceitos: De 00:00 às 23:59</Text>
                                    <View style={styles.inputRow}>
                                        <TextInput
                                            style={[styles.input, styles.inputHorario]}
                                            placeholder="Início"
                                            placeholderTextColor="white"
                                            keyboardType='numeric'
                                            value={dia.inicio}
                                            onChangeText={(text) => handleInputChange(text, index, 'inicio')}
                                            maxLength={5}
                                        />
                                        <TextInput
                                            style={[styles.input, styles.inputHorario]}
                                            placeholder="Fim"
                                            placeholderTextColor="white"
                                            keyboardType='numeric'
                                            value={dia.fim}
                                            onChangeText={(text) => handleInputChange(text, index, 'fim')}
                                            maxLength={5}
                                        />
                                    </View>
                                    <Text style={styles.subTitle}>Horários de descanso</Text>
                                    {dia.descansos.map((descanso, descansoIndex) => (
                                        <View key={descansoIndex} style={styles.inputRow}>
                                            <TextInput
                                                style={[styles.input, styles.inputHorario]}
                                                placeholder="Início"
                                                placeholderTextColor="white"
                                                keyboardType='numeric'
                                                value={descanso.inicio}
                                                onChangeText={(text) => handleInputChange(text, index, 'inicio')}
                                                maxLength={5}
                                            />
                                            <TextInput
                                                style={[styles.input, styles.inputHorario]}
                                                placeholder="Fim"
                                                placeholderTextColor="white"
                                                keyboardType='numeric'
                                                value={descanso.fim}
                                                onChangeText={(text) => handleInputChange(text, index, 'fim')}
                                                maxLength={5}
                                            />
                                            <TouchableOpacity onPress={() => deleteDescanso(index, descansoIndex)}>
                                                <Text style={styles.actionButton}>Excluir</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                    <TouchableOpacity onPress={() => addDescanso(index)}>
                                        <Text style={styles.addButton}> + Adicionar novo descanso + </Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Terceira')}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <PageIndicators totalPages={totalPages} currentPage={currentPage} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quinta')}>
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
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'black',
        marginTop: 40,
        marginBottom: 100, // Adiciona margem inferior para a tabBar não ficar por cima dos campos de resposta
        justifyContent: 'space-between',
    },
    scrollContainer: {
        flex: 1,
    },
    diaContainer: {
        marginBottom: 20,
    },
    diaHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    diaText: {
        flex: 1,
        color: 'white',
        fontSize: 16,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        color: 'white',
        marginRight: 10,
    },
    inputHorario: {
        flex: 1,
    },
    subTitle: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 5,
    },
    actionButton: {
        color: 'white',
        marginLeft: 10,
    },
    addButton: {
        color: 'white',
        marginTop: 10,
        fontSize: 13,
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
    image: {
        width: 80, // Defina o tamanho da imagem conforme desejado
        height: 80, // Defina o tamanho da imagem conforme desejado
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    },
    message: {
        color: 'white',
        fontSize: 12,
        marginBottom: 10,
    },
});

export default FourthScreen;
