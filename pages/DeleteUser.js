import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text
} from 'react-native';

const DeleteUser = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Deletar Usuário</Text>
            </View>
        </SafeAreaView>
    )
}

export default DeleteUser;