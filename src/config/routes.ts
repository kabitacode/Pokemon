import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Detail: { name: string | undefined };
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;