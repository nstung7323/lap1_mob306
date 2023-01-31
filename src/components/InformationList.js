import { FlatList, Text, StyleSheet, View, Image } from "react-native";

export default function InformationList(props) {
    return (
        <FlatList
            data={props.list}
            renderItem={({ item }) => (
                <View style={styles.itv}>
                    <View style={styles.avatar}>
                        <Image
                            source={{ uri: `${item.uri}` }}
                            style={{ width: 100, height: 100 }}
                        />
                    </View>
                    <View style={styles.information}>
                        <Text style={styles.itvName}>{item.name}</Text>
                        <Text style={styles.itvDescrip}>{item.description}</Text>
                    </View>
                </View>
            )}
            keyExtractor={(item, index) => item.id}
        />
    );
};

const styles = StyleSheet.create({
    itv: {
        display: 'flex',
        flexDirection: 'row',
        
    },
    itvName: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    itvDescrip: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 16,
        fontStyle: 'italic',
    }
});