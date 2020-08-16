import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text
} from 'react-native';

const ViewUser = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Visualizar Usuário</Text>
            </View>
        </SafeAreaView>
    )
}

export default ViewUser;