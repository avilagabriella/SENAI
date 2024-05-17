import React, {useEffcts, useStates} from 'react';
import {View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { getCharacters } from '../api/marvelApi';

const CharactersList = () => {
    const [characters, setcharacters] = useState([]);

    useEffect(() => {
        const fotCharacters = asyns () => {
            const data = await getCharacters();
            setCharacters(data);
        },
        fetchCharacters();

    }, []);

    const rendreItem = ({item}) => {
        <View style = {StyleSheet.item}>
            <image
            style={StyleSheet.image}
            <source={{uri:`${item.thumbnail.patch}.${item.thumbnail.extersion}`}} 
            <Text style={StyleSheet.name}>{item.name}</Text>
        </View>
    };
    return (
        <FlatList
            data={characters}
            renderItem={render Item}
            keyExtractor={item => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
})