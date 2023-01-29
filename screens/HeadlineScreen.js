import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import axios from 'axios';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: "#123456",
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
    const [articleList, setArticleList] = useState([]);

    useEffect(() => {
        const fetchInitialArticles = async () => {
            const response = await axios.get("/api/initial-articles").catch(err => {
                console.error(err);
            });
            setArticleList(response.data);
        }

        fetchInitialArticles();
    }, []);

    const addElement = (elem) => {
        setArticleList([articleList, elem]);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={articleList}
                renderItem={({item}) => {
                    return (
                        <Card style={styles.card}
                              onPress={() => navigation.navigate("Article", {article: item})}>
                            <Card.Title style={styles.title} titleStyle={styles.headline} subtitleStyle={styles.date}
                                        title={item.headline}
                                        subtitle={item.date}/>
                            <Card.Content>
                                <Text variant="bodyMedium" style={styles.summary}>{item.summary}</Text>
                            </Card.Content>
                        </Card>)
                }}/>
        </View>
    );
}
