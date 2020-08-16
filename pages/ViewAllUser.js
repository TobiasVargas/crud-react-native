import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text
} from 'react-native';

const ViewAllUser = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Listagem de Usuários</Text>
            </View>
        </SafeAreaView>
    )
}

export default ViewAllUser;