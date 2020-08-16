import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text
} from 'react-native';

const CreateUser = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Criar Usuário</Text>
            </View>
        </SafeAreaView>
    )
}

export default CreateUser;