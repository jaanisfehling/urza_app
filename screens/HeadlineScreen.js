import React from 'react';
import {FlatList, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default function HeadlineScreen() {
    return (
        <View>
            <FlatList
                data={[
                    {key: "Headline 1"},
                    {key: "Headline 2"},
                    {key: "Headline 3"},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}
