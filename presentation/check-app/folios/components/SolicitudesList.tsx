import { CardList } from "@/core/check-app/interface/card-list.interface";
import { FlatList, StyleSheet } from "react-native";
import Card from "./card";


interface Props {
    listSolicitudes: CardList[];
}

const SolicitudesList = ({ listSolicitudes }: Props) => {

    return (
        <FlatList
            data={listSolicitudes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Card solicitud={item} />}
            onEndReachedThreshold={0}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
        />
    )
}

export default SolicitudesList;

const styles = StyleSheet.create({
    contentContainer: {
        gap: 20,
    },
});