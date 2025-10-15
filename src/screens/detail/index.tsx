import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useGetDetailQuery } from '../../store/api/homeApi';
import { DetailScreenProps } from '../../config/routes';
import { Loading } from '../../components';

const Detail: React.FC<DetailScreenProps> = ({ navigation, route }) => {
    const { data: dataDetail, isLoading } = useGetDetailQuery(route?.params?.name ?? "");


    if (isLoading) {
        return <Loading />
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/images/icon-back.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textTitle}>Detail</Text>
            </View>

            <ScrollView>
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: dataDetail?.sprites?.front_default }} style={styles.image} />
                </View>

                <View style={styles.row}>
                    <Text style={styles.textTitleRow}>Name</Text>
                    <Text style={styles.text}>{dataDetail?.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textTitleRow}>Height</Text>
                    <Text style={styles.text}>{dataDetail?.height} cm</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textTitleRow}>Weight</Text>
                    <Text style={styles.text}>{dataDetail?.weight} kg</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textTitleRow}>Types</Text>
                    <View style={styles.type}>
                        {
                            Array?.isArray(dataDetail?.types) && dataDetail?.types?.map((item) => (
                                <Text key={item?.type?.name} style={styles.text}>{item?.type?.name}</Text>
                            ))
                        }
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textTitleRow}>Abilities</Text>
                    <View style={styles.type}>
                        {
                            Array?.isArray(dataDetail?.abilities) && dataDetail?.abilities?.map((item) => (
                                <Text key={item?.ability?.name} style={styles.text}>{item?.ability?.name}</Text>
                            ))
                        }
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textTitleRow}>Stats</Text>
                    <View style={styles.type}>
                        {
                            Array?.isArray(dataDetail?.stats) && dataDetail?.stats?.map((item) => (
                                <Text key={item?.stat?.name} style={styles.text}>{item?.stat?.name}</Text>
                            ))
                        }
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textTitleRow}>Species</Text>
                    <Text style={styles.text}>{dataDetail?.species?.name}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Detail;