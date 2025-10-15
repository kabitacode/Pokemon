import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { HomeScreenProps } from '../../config/routes';
import { Empty, Loading, PokemonImage } from '../../components';
import { useGetHomeQuery } from '../../store/api/homeApi';


const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { data: dataPokemon, isLoading: isLoading, refetch } = useGetHomeQuery();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true)
        await refetch()
        setRefreshing(false)
    }

    if (isLoading) {
        return <Loading />
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
                        <TouchableOpacity testID={'button-list'} style={styles.card} key={index} onPress={() => navigation.navigate('Detail', { name: item?.name })}>
                            <PokemonImage name={item?.name} />
                            <Text style={styles.text}>{item?.name}</Text>
                        </TouchableOpacity>
                    )
                }}
                ListEmptyComponent={<Empty />}
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        </SafeAreaView>
    )
}

export default Home;