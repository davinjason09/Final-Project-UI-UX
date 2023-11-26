import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Gap, Header } from '../../components'
import { colors, fonts } from '../../utils'

const BudgetSettingDetail = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header iconBack textLeft='Food' textCenter='Oct 2023' onPress={()=> navigation.goBack()}/>
            <Gap height={40} />
            <View style={{ paddingHorizontal: 24 }}>
                <TextInput style={styles.input} placeholder='Enter Amount' placeholderTextColor={colors.grey2} />
                <Gap height={20} />
                <TextInput style={styles.input} placeholder='Add a message (optional)' placeholderTextColor={colors.grey2} />
                <Gap height={30} />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BudgetSettingDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    input: {
        borderWidth: 1,
        borderColor: colors.blue,
        borderRadius: 4,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: fonts.primary.Bold
    },
    btn: {
        backgroundColor: colors.blue,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.primary.Bold,
        color: colors.white
    }
})