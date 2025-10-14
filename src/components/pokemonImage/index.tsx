import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useGetDetailQuery } from '../../store/api/home';

type Props = {
    name?: string;
}

const PokemonImage = ({name}: Props) => {
    const { data } = useGetDetailQuery(name ?? "")

    if (!name) return null;

    return (
        <Image
            source={{ uri: data?.sprites?.front_default }}
            style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        resizeMode: 'cover'
    }
})

export default PokemonImage;