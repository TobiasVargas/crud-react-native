import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text
} from 'react-native';

const UpdateUser = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Atualizar Usuário</Text>
            </View>
        </SafeAreaView>
    )
}

export default UpdateUser;