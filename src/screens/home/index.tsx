import * as React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useGetHomeQuery } from '../../store/api/home';
import { HomeScreenProps } from '../../config/routes';
import { Loading, PokemonImage } from '../../components';


const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { data: dataPokemon, isLoading: isLoading } = useGetHomeQuery();

    if (isLoading) {
        return <Loading/>
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textTitle}>GoPokemon</Text>
            </View>
            <FlatList
                data={dataPokemon?.results ?? []}
                style={styles.wrapper}
                keyExtractor={(item, index) => item?.name !== undefined ? item?.name?.toString() : `${index}`}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={styles.card} key={index} onPress={() => navigation.navigate('Detail', { name: item?.name })}>
                            <PokemonImage name={item?.name} />
                            <Text style={styles.text}>{item?.name}</Text>
                        </TouchableOpacity>
                    )
                }}
                ListEmptyComponent={  <View style={styles.empty}>
                        <Image source={require('../../assets/images/empty.png')} style={styles.imageEmpty}/>
                    </View>}
            />
        </SafeAreaView>
    )
}

export default Home;