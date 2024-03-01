import{View,StyleSheet,Text,TextInput,TouchableOpacity}  from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';

export default function FormIMC() {
    const [peso, setPeso] = React.userState('');
    const [altura, setAltura] = React.useState('');
    const [imc, setImc] = React.useState('');
    
    const CalImc = () => {
        const numberPeso = Number(peso);
        const numberAltura = Number(altura);
        setImc((numberPeso / (numberAltura ** 2 )).toFixed(2));
    }
    return(
        <>
        <View.style={styles.container}>
        <View style={styles.content}>
            <Text>Calculadora de IMC</Text>

            <MaskInput 
            mask={[/\d/,/\d/,/\d/,'.', /\d/]}
            style={styles.textInput}
            onChageText={(masked, unmasked) =>  setPeso(masked)}
            valuer={peso}
            placeholder="Digite seu peso"
            keyboardType="numeric"
        
        />

        <TouchableOpacity
        style={styles.button}
        onPress={calcIMC}
      
        </>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        gap: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    textInput {
        width: 200,
        height: 40,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#fff',
        fontSize: 16,
    }

    button: {
      
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#006eff'
        alignItems: 'center',
    }
});


