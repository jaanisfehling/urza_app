import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import axios from 'axios';

let MockAdapter = require("axios-mock-adapter");

let mock = new MockAdapter(axios);
mock.onGet("/api/initial-articles").reply(200, [
    {headline: "Headline", date: "January 13, 2023 06:55", summary: "This is a major Change"},
    {headline: "Headline", date: "January 13, 2023 06:54", summary: "Breaking News"},
    {
        headline: "Headline",
        date: "January 13, 2023 06:53",
        summary: "summary asujhagdfsgjafkahjfkabfajhvbjkadnvouiaohkdmv jhuGIHOKDVNBCJHGAUHIOKFSDMVBOUIAHJVHAJVDBL"
    }]
)

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
    const [articleListState, setArticleList] = useState([]);

    useEffect(async () => {
        const result = await axios(
            "/api/initial-articles",
        );
        setArticleList(result.data);
    });

    const addElement = (elem) => {
        setArticleList([articleListState, elem]);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={articleListState}
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
