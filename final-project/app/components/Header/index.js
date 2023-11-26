import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconBack, IconCalendar } from '../../assets'
import { colors, fonts } from '../../utils'

const Header = ({ textCenter, textLeft, textRight, iconBack, iconCalendar, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnBack} onPress={onPress}>
                {iconBack && <IconBack />}
            </TouchableOpacity>
            <View style={{ width: '20%' }}>
                <Text style={styles.text}>{textLeft}</Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{textCenter}</Text>
            </View>
            <View style={{ width: '20%' }}>
                <Text style={styles.text}>{textRight}</Text>
            </View>
            <TouchableOpacity style={styles.btnBack}>
                {iconCalendar && <IconCalendar />}
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    btnBack: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
        justifyContent: 'space-between',
        backgroundColor: colors.white
    },
    text: {
        fontSize: 18,
        fontFamily: fonts.primary.Bold,
        color: colors.black
    }
})