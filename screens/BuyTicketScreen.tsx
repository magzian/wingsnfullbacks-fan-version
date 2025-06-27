import { View, Text, TouchableOpacity, StyleSheet, Touchable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DarkTheme from 'constants/theme'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';





export default function BuyTicketScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.ticketContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={28} color={DarkTheme.colors.text} />
                </TouchableOpacity>
                <Animatable.View animation="zoomIn" duration={1000} style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Ionicons name="ticket-outline" size={110} color={DarkTheme.colors.primary} />
                    <Text style={styles.ticket}>Buy Ticket</Text>
                </Animatable.View>
            </View>
            <View style={styles.ticketTypeContainer}>
                {/* You can add ticket type selection or other content here */}
                <Text style={{ color: DarkTheme.colors.text, fontFamily: 'Nunito-Regular', fontSize: 18 }}>Select Ticket Type</Text>
                {/* Add ticket type options here */}
                <TouchableOpacity style={{ padding: 10, backgroundColor: DarkTheme.colors.card, borderRadius: 8, marginTop: 10 }}>
                    <Text style={{ color: DarkTheme.colors.text, fontFamily: 'Nunito-Regular', fontSize: 16 }}>Early bird Ticket</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, backgroundColor: DarkTheme.colors.card, borderRadius: 8, marginTop: 10 }}>
                    <Text style={{ color: DarkTheme.colors.text, fontFamily: 'Nunito-Regular', fontSize: 16 }}>Regular Ticket</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, backgroundColor: DarkTheme.colors.card, borderRadius: 8, marginTop: 10 }}>
                    <Text style={{ color: DarkTheme.colors.text, fontFamily: 'Nunito-Regular', fontSize: 16 }}>Group Ticket</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, backgroundColor: DarkTheme.colors.card, borderRadius: 8, marginTop: 10 }}>
                    <Text style={{ color: DarkTheme.colors.text, fontFamily: 'Nunito-Regular', fontSize: 16 }}>Gate Ticket</Text>
                </TouchableOpacity>
            </View>
            {/* Add more content below if needed */}
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DarkTheme.colors.background,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 0,
    },
    ticketContainer: {
        width: '100%',
        height: 300,
        marginTop: 0,
        backgroundColor: DarkTheme.colors.card,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 8,
    },
    backButton: {
        padding: 10,
        position: 'absolute',
        top: 40,
        left: 10,
        zIndex: 1,
    },
    ticket: {
        color: DarkTheme.colors.text,
        fontFamily: 'Nunito-Bold',
        fontSize: 32,
        marginTop: 10,
    },

    ticketTypeContainer: {
        
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
    },
});