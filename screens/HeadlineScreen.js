import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    card: {
        backgroundColor: "#002a5d",
        borderRadius: 18,
        margin: 5,
    },
    title: {},
    headline: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    date: {
        fontSize: 10,
        color: "white",
    },
    summary: {
        fontSize: 12,
        color: "white",
    },
});

export default function HeadlineScreen({navigation}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    {headline: "Headline", date: "January 13, 2023 06:55", summary: "This is a major Change"},
                    {headline: "Headline", date: "January 13, 2023 06:54", summary: "Breaking News"},
                    {
                        headline: "Headline",
                        date: "January 13, 2023 06:53",
                        summary: "The World is dying and we should be worried. This text is stupid fuckk off"
                    },
                ]}
                renderItem={({item}) =>
                    <Card style={styles.card} onPress={() => navigation.navigate("Article")}>
                        <Card.Title style={styles.title} titleStyle={styles.headline} subtitleStyle={styles.date}
                                    title={item.headline}
                                    subtitle={item.date}/>
                        <Card.Content>
                            <Text variant="bodyMedium" style={styles.summary}>{item.summary}</Text>
                        </Card.Content>
                    </Card>
                }/>
        </View>
    );
}
