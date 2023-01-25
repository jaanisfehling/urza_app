import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import axios from 'axios';

let MockAdapter = require("axios-mock-adapter");

let mock = new MockAdapter(axios);
mock.onGet("/api/initial-articles").reply(200, [
    {
        headline: "Headline",
        date: "January 13, 2023 06:55",
        summary: "This is a major Change",
        html: "<div class=\"page\" id=\"readability-page-1\"><div> <p>ORANGE, Calif.--(<span><span><a href=\"https://www.businesswire.com/\" rel=\"nofollow\">BUSINESS WIRE</a></span></span>)--The <a shape=\"rect\" rel=\"nofollow\" href=\"https://cts.businesswire.com/ct/CT?id=smartlink&amp;url=https%3A%2F%2Fwww.embac.org%2F&amp;esheet=53287888&amp;newsitemid=20230123005150&amp;lan=en-US&amp;anchor=Executive+MBA+Council&amp;index=1&amp;md5=23e63c4f427c88cdca0e371489950d13\">Executive MBA Council</a> (EMBAC) announced today the results of its 2022 EMBAC Membership Program Survey, which revealed the percentage of female enrollment grew again, reaching a new high, of 34.8 percent in 2022, compared to 33.0 percent in 2021, and to 30.1 percent in 2017. “While not a dramatic increase, the steady growth in women attending EMBA programs is a positive signal for business schools and the business community at large,” said Michael Desiderio, executive director of EMBAC.</p><blockquote></blockquote><p>The results also show 86 percent of participating member programs incorporated distance learning into their curricula, compared to 55 percent in pre-pandemic 2019. Distance learning content that programs delivered synchronously increased from 34 percent in 2019 to 44 percent in 2022. In addition, more than 80 percent of participating member programs reported the use of electronic cases and books. “EMBA programs continue to adapt to the changing needs of working professionals,” says Desiderio. “Much of that change comes from applying technology that allowed students to continue their education in the program during the pandemic in new ways that help enhance the in-person learning experience.”</p><p>And while technology is having an impact, so too is coaching as it remains an integral part of EMBA programs. 89.8 percent of EMBA Programs offered executive coaching in 2022, up from 88.1 percent of EMBA Programs in 2021.</p><p>In addition to these trends, the findings also show that the travel has made a comeback as 92% of programs included either a mandatory or optional international trip in their curricula. “The experiential part of EMBA programs is still sought by students,” says Desiderio.</p><p><b>Additional insights from the 2022 EMBAC Membership Program Survey include:</b></p><ul><li>In 2022, the average age of enrolled EMBA students rose very slightly from 38 to 38.9 years.</li><li>Students came to programs with more work and management experience, averaging 14.6 years of work experience in 2022 compared to 14 years in 2021 and 9.2 average years of management experience in 2022 compared to 8.9 years in 2021.</li><li>The percentage of self-funded students remained flat at 56.2 percent. Meanwhile students receiving full sponsorship saw a slight increase from 15.2 percent in 2021 to 16.4 percent in 2022.</li><li>Almost 61 percent of programs offer scholarships or fellowships, with 31 percent of EMBA students receiving scholarships or fellowships.</li></ul><p>The EMBA Council currently includes nearly 200 colleges and universities that administer close to 300 programs in more than 30 countries worldwide. Each year, EMBAC conducts a Membership Program Survey using the current methodology annually since 2003. In 2022, the survey was conducted by Percept Research, held from May 17 to Aug. 22, and was completed by approximately 76% of the EMBA member programs.</p><p><b>About the Executive MBA Council</b></p><p>The academic association that represents the Executive MBA (EMBA) industry, the Executive MBA Council (EMBAC) advances the cause of EMBA Programs by serving as a facilitator of best practice sharing and knowledge dissemination, and fostering an inclusive and diverse community among high-quality programs. EMBAC plays a thought leadership role by engaging in research that offers insights, by generating or packaging relevant content of importance and interest to the membership and industry, by advocating for the industry, and by nurturing an environment of inclusion that inspires all members and stakeholders. To learn more about the Council and its members, visit <a shape=\"rect\" rel=\"nofollow\" href=\"https://cts.businesswire.com/ct/CT?id=smartlink&amp;url=https%3A%2F%2Fembac.org&amp;esheet=53287888&amp;newsitemid=20230123005150&amp;lan=en-US&amp;anchor=https%3A%2F%2Fembac.org&amp;index=2&amp;md5=a33042a2fd58f30653213f78b842f6e7\">https://embac.org</a>; prospective students should visit <a shape=\"rect\" rel=\"nofollow\" href=\"https://cts.businesswire.com/ct/CT?id=smartlink&amp;url=https%3A%2F%2Fexecutivemba.org%2F&amp;esheet=53287888&amp;newsitemid=20230123005150&amp;lan=en-US&amp;anchor=https%3A%2F%2Fexecutivemba.org&amp;index=3&amp;md5=9f2fb9fe995a84b48fd4256db813ef9a\">https://executivemba.org</a> for more information.</p></div></div>",
        tickers: ["AAPL", "GOOGL"]
    },
    {headline: "Headline", date: "January 13, 2023 06:54", summary: "Breaking News", tickers: ["AAPL", "GOOGL"]},
    {
        headline: "Headline",
        date: "January 13, 2023 06:53",
        summary: "summary asujhagdfsgjafkahjfkabfajhvbjkadnvouiaohkdmv jhuGIHOKDVNBCJHGAUHIOKFSDMVBOUIAHJVHAJVDBL",
        tickers: ["AAPL", "GOOGL"]
    }]
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
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
            const response = await axios("/api/initial-articles");
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
                              onPress={() => navigation.navigate("Article", item)}>
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
