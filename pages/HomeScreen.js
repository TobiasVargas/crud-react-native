import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import MyButton from '../components/MyButton';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Tela Inicial</Text>
                <MyButton 
                    title="Criar"
                    onClick={() => navigation.navigate('Criar') }
                />
                <MyButton 
                    title="Deletar"
                    onClick={() => navigation.navigate('Deletar') }
                />
                <MyButton 
                    title="Atualizar"
                    onClick={() => navigation.navigate('Atualizar') }
                />
                <MyButton 
                    title="Visualizar Todos"
                    onClick={() => navigation.navigate('VisualizarTodos') }
                />
                <MyButton 
                    title="Visualizar"
                    onClick={() => navigation.navigate('Visualizar') }
                />
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen;