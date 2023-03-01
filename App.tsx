import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ArticleScreen from "./screens/ArticleScreen";
import HeadlineScreen from "./screens/HeadlineScreen";
import {Button} from "react-native";
import InstrumentSelectScreen from "./screens/InstrumentSelectScreen";
import MockAdapter from 'axios-mock-adapter';
import {axiosInstance, fontBold} from "./utils";
import TradingScreen from "./screens/TradingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ResetPwdScreen from "./screens/ResetPwdScreen";


const Stack = createNativeStackNavigator();

const mock = new MockAdapter(axiosInstance);

mock.onGet("/api/initial-articles").reply(200, [
    {
        headline: "Headline1asdagasfgafahdhafhd",
        date: "January 13, 2023 06:55",
        summary: "This is a major Change",
        html: "<div class=\"page\" id=\"readability-page-1\"><div><p>ORANGE, Calif.--(<span><span><a href=\"https://www.businesswire.com/\" rel=\"nofollow\">BUSINESS WIRE</a></span></span>)--The<a shape=\"rect\" rel=\"nofollow\" href=\"https://cts.businesswire.com/ct/CT?id=smartlink&amp;url=https%3A%2F%2Fwww.embac.org%2F&amp;esheet=53287888&amp;newsitemid=20230123005150&amp;lan=en-US&amp;anchor=Executive+MBA+Council&amp;index=1&amp;md5=23e63c4f427c88cdca0e371489950d13\">Executive MBA Council</a>(EMBAC) announced today the results of its 2022 EMBAC Membership Program Survey, which revealed the percentage of female enrollment grew again, reaching a new high, of 34.8 percent in 2022, compared to 33.0 percent in 2021, and to 30.1 percent in 2017. “While not a dramatic increase, the steady growth in women attending EMBA programs is a positive signal for business schools and the business community at large,” said Michael Desiderio, executive director of EMBAC.</p><blockquote></blockquote><p>The results also show 86 percent of participating member programs incorporated distance learning into their curricula, compared to 55 percent in pre-pandemic 2019. Distance learning content that programs delivered synchronously increased from 34 percent in 2019 to 44 percent in 2022. In addition, more than 80 percent of participating member programs reported the use of electronic cases and books. “EMBA programs continue to adapt to the changing needs of working professionals,” says Desiderio. “Much of that change comes from applying technology that allowed students to continue their education in the program during the pandemic in new ways that help enhance the in-person learning experience.”</p><p>And while technology is having an impact, so too is coaching as it remains an integral part of EMBA programs. 89.8 percent of EMBA Programs offered executive coaching in 2022, up from 88.1 percent of EMBA Programs in 2021.</p><p>In addition to these trends, the findings also show that the travel has made a comeback as 92% of programs included either a mandatory or optional international trip in their curricula. “The experiential part of EMBA programs is still sought by students,” says Desiderio.</p><p><b>Additional insights from the 2022 EMBAC Membership Program Survey include:</b></p><ul><li>In 2022, the average age of enrolled EMBA students rose very slightly from 38 to 38.9 years.</li><li>Students came to programs with more work and management experience, averaging 14.6 years of work experience in 2022 compared to 14 years in 2021 and 9.2 average years of management experience in 2022 compared to 8.9 years in 2021.</li><li>The percentage of self-funded students remained flat at 56.2 percent. Meanwhile students receiving full sponsorship saw a slight increase from 15.2 percent in 2021 to 16.4 percent in 2022.</li><li>Almost 61 percent of programs offer scholarships or fellowships, with 31 percent of EMBA students receiving scholarships or fellowships.</li></ul><p>The EMBA Council currently includes nearly 200 colleges and universities that administer close to 300 programs in more than 30 countries worldwide. Each year, EMBAC conducts a Membership Program Survey using the current methodology annually since 2003. In 2022, the survey was conducted by Percept Research, held from May 17 to Aug. 22, and was completed by approximately 76% of the EMBA member programs.</p><p><b>About the Executive MBA Council</b></p><p>The academic association that represents the Executive MBA (EMBA) industry, the Executive MBA Council (EMBAC) advances the cause of EMBA Programs by serving as a facilitator of best practice sharing and knowledge dissemination, and fostering an inclusive and diverse community among high-quality programs. EMBAC plays a thought leadership role by engaging in research that offers insights, by generating or packaging relevant content of importance and interest to the membership and industry, by advocating for the industry, and by nurturing an environment of inclusion that inspires all members and stakeholders. To learn more about the Council and its members, visit<a shape=\"rect\" rel=\"nofollow\" href=\"https://cts.businesswire.com/ct/CT?id=smartlink&amp;url=https%3A%2F%2Fembac.org&amp;esheet=53287888&amp;newsitemid=20230123005150&amp;lan=en-US&amp;anchor=https%3A%2F%2Fembac.org&amp;index=2&amp;md5=a33042a2fd58f30653213f78b842f6e7\">https://embac.org</a>; prospective students should visit<a shape=\"rect\" rel=\"nofollow\" href=\"https://cts.businesswire.com/ct/CT?id=smartlink&amp;url=https%3A%2F%2Fexecutivemba.org%2F&amp;esheet=53287888&amp;newsitemid=20230123005150&amp;lan=en-US&amp;anchor=https%3A%2F%2Fexecutivemba.org&amp;index=3&amp;md5=9f2fb9fe995a84b48fd4256db813ef9a\">https://executivemba.org</a>for more information.</p></div></div>",
        tickers: ["AAPL", "GOOGL"],
        positive_sentiment: 0.995
    },
    {
        headline: "Headline2asghadsfhadfhadfhadfha",
        date: "January 13, 2023 06:54",
        summary: "Breaking News",
        html: "<p>Hi</p>",
        tickers: ["AAPL", "GOOGL"],
        positive_sentiment: 0.567
    },
    {
        headline: "Headline3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        date: "January 13, 2023 06:53",
        summary: "summary asujhagdfsgjafkahjfkabfajhvbjkadnvouiaohkdmv jhuGIHOKDVNBCJHGAUHIOKFSDMVBOUIAHJVHAJVDBL",
        html: "<p>Hi</p>",
        tickers: ["AAPL", "GOOGL"],
        positive_sentiment: 0.123
    }]
)

mock.onGet("/api/stocks", {params: {symbols: "AAPL,GOOGL"}}).reply(200, {
        AAPL: {
            ohlc: [
                {
                    't': '2023-01-03T05:00:00Z',
                    'open': 130.28,
                    'high': 130.9,
                    'low': 124.17,
                    'close': 125.07,
                    'v': 112084324
                }, {
                    't': '2023-01-04T05:00:00Z',
                    'open': 126.89,
                    'high': 128.6557,
                    'low': 125.08,
                    'close': 126.36,
                    'v': 89072202
                }, {
                    't': '2023-01-05T05:00:00Z',
                    'open': 127.13,
                    'high': 127.74,
                    'low': 124.76,
                    'close': 125.02,
                    'v': 81246605
                }, {
                    't': '2023-01-06T05:00:00Z',
                    'open': 126.01,
                    'high': 130.29,
                    'low': 124.89,
                    'close': 129.62,
                    'v': 87758343
                }, {
                    't': '2023-01-09T05:00:00Z',
                    'open': 130.465,
                    'high': 133.41,
                    'low': 129.89,
                    'close': 130.15,
                    'v': 70832518
                }, {
                    't': '2023-01-10T05:00:00Z',
                    'open': 130.26,
                    'high': 131.2636,
                    'low': 128.12,
                    'close': 130.73,
                    'v': 63924884
                }, {
                    't': '2023-01-11T05:00:00Z',
                    'open': 131.25,
                    'high': 133.51,
                    'low': 130.46,
                    'close': 133.49,
                    'v': 69546367
                }, {
                    't': '2023-01-12T05:00:00Z',
                    'open': 133.88,
                    'high': 134.26,
                    'low': 131.44,
                    'close': 133.41,
                    'v': 71379796
                }, {
                    't': '2023-01-13T05:00:00Z',
                    'open': 132.03,
                    'high': 134.92,
                    'low': 131.66,
                    'close': 134.76,
                    'v': 57769049
                }, {
                    't': '2023-01-17T05:00:00Z',
                    'open': 134.83,
                    'high': 137.29,
                    'low': 134.13,
                    'close': 135.94,
                    'v': 63758760
                }, {
                    't': '2023-01-18T05:00:00Z',
                    'open': 136.815,
                    'high': 138.61,
                    'low': 135.03,
                    'close': 135.21,
                    'v': 69735052
                }, {
                    't': '2023-01-19T05:00:00Z',
                    'open': 134.08,
                    'high': 136.25,
                    'low': 133.77,
                    'close': 135.27,
                    'v': 58358070
                }, {
                    't': '2023-01-20T05:00:00Z',
                    'open': 135.28,
                    'high': 138.02,
                    'low': 134.22,
                    'close': 137.87,
                    'v': 80246596
                }, {
                    't': '2023-01-23T05:00:00Z',
                    'open': 138.12,
                    'high': 143.315,
                    'low': 137.9,
                    'close': 141.11,
                    'v': 81782578
                }, {
                    't': '2023-01-24T05:00:00Z',
                    'open': 140.305,
                    'high': 143.16,
                    'low': 140.3,
                    'close': 142.53,
                    'v': 66537342
                }, {
                    't': '2023-01-25T05:00:00Z',
                    'open': 140.89,
                    'high': 142.43,
                    'low': 138.81,
                    'close': 141.86,
                    'v': 65853903
                }, {
                    't': '2023-01-26T05:00:00Z',
                    'open': 143.17,
                    'high': 144.25,
                    'low': 141.9,
                    'close': 143.96,
                    'v': 54133367
                }, {
                    't': '2023-01-27T05:00:00Z',
                    'open': 143.155,
                    'high': 147.23,
                    'low': 143.08,
                    'close': 145.93,
                    'v': 70563928
                }, {
                    't': '2023-01-30T05:00:00Z',
                    'open': 144.955,
                    'high': 145.55,
                    'low': 142.85,
                    'close': 143,
                    'v': 64035195
                }, {
                    't': '2023-01-31T05:00:00Z',
                    'open': 142.7,
                    'high': 144.34,
                    'low': 142.28,
                    'close': 144.29,
                    'v': 65874459
                }, {
                    't': '2023-02-01T05:00:00Z',
                    'open': 143.97,
                    'high': 146.61,
                    'low': 141.32,
                    'close': 145.46,
                    'v': 77104982
                }
            ],
            options: {
                call: [{name: "option", strike: 80.00, delta: "0.05", expiry: "2023-04-01"}, {
                    name: "option",
                    strike: 41.00,
                    delta: "0.05",
                    expiry: "2023-04-01"
                }, {name: "option", strike: 90.00, delta: "0.05", expiry: "2023-04-01"}],
                put: [{name: "option", strike: 80.00, delta: "0.05", expiry: "2023-04-01"}, {
                    name: "option",
                    strike: 78.00,
                    delta: "0.05",
                    expiry: "2023-04-01"
                }, {name: "option", strike: 90.00, delta: "0.05", expiry: "2023-04-01"}]
            }
        },
        GOOGL: {
            ohlc: [
                {
                    't': '2023-01-02T00:00:00.000+00:00',
                    'open': 122.24,
                    'high': 124.28,
                    'low': 121.72,
                    'close': 123.66,
                    'v': 12511
                }, {
                    't': '2023-01-03T00:00:00.000+00:00',
                    'open': 122.46,
                    'high': 124.62,
                    'low': 117.62,
                    'close': 118.8,
                    'v': 37855
                }, {
                    't': '2023-01-04T00:00:00.000+00:00',
                    'open': 118.8,
                    'high': 121.28,
                    'low': 118.14,
                    'close': 119.02,
                    'v': 32556
                }, {
                    't': '2023-01-05T00:00:00.000+00:00',
                    'open': 119.24,
                    'high': 121.16,
                    'low': 118.52,
                    'close': 118.84,
                    'v': 24598
                }, {
                    't': '2023-01-06T00:00:00.000+00:00',
                    'open': 119.14,
                    'high': 122.46,
                    'low': 118.56,
                    'close': 121.58,
                    'v': 26983
                }, {
                    't': '2023-01-09T00:00:00.000+00:00',
                    'open': 122.02,
                    'high': 124.12,
                    'low': 121.06,
                    'close': 121.26,
                    'v': 24788
                }, {
                    't': '2023-01-10T00:00:00.000+00:00',
                    'open': 121.38,
                    'high': 122.04,
                    'low': 119.48,
                    'close': 121.66,
                    'v': 16322
                }, {
                    't': '2023-01-11T00:00:00.000+00:00',
                    'open': 122.02,
                    'high': 124.0,
                    'low': 121.12,
                    'close': 124.0,
                    'v': 24233
                }, {
                    't': '2023-01-12T00:00:00.000+00:00',
                    'open': 124.44,
                    'high': 124.78,
                    'low': 122.06,
                    'close': 122.94,
                    'v': 28889
                }, {
                    't': '2023-01-13T00:00:00.000+00:00',
                    'open': 122.88,
                    'high': 124.54,
                    'low': 121.8,
                    'close': 124.32,
                    'v': 17390
                }, {
                    't': '2023-01-16T00:00:00.000+00:00',
                    'open': 124.48,
                    'high': 124.82,
                    'low': 123.3,
                    'close': 124.46,
                    'v': 11113
                }, {
                    't': '2023-01-17T00:00:00.000+00:00',
                    'open': 124.2,
                    'high': 126.92,
                    'low': 123.52,
                    'close': 126.0,
                    'v': 21644
                }, {
                    't': '2023-01-18T00:00:00.000+00:00',
                    'open': 126.9,
                    'high': 127.62,
                    'low': 125.0,
                    'close': 125.2,
                    'v': 14812
                }, {
                    't': '2023-01-19T00:00:00.000+00:00',
                    'open': 125.24,
                    'high': 125.7,
                    'low': 123.28,
                    'close': 124.94,
                    'v': 14687
                }, {
                    't': '2023-01-20T00:00:00.000+00:00',
                    'open': 125.54,
                    'high': 127.02,
                    'low': 124.2,
                    'close': 126.86,
                    'v': 13891
                }, {
                    't': '2023-01-23T00:00:00.000+00:00',
                    'open': 126.56,
                    'high': 131.96,
                    'low': 125.92,
                    'close': 129.92,
                    'v': 23899
                }, {
                    't': '2023-01-24T00:00:00.000+00:00',
                    'open': 129.98,
                    'high': 131.56,
                    'low': 128.6,
                    'close': 131.04,
                    'v': 12735
                }, {
                    't': '2023-01-25T00:00:00.000+00:00',
                    'open': 130.26,
                    'high': 130.66,
                    'low': 127.48,
                    'close': 129.88,
                    'v': 14731
                }, {
                    't': '2023-01-26T00:00:00.000+00:00',
                    'open': 130.98,
                    'high': 132.32,
                    'low': 130.06,
                    'close': 132.24,
                    'v': 14422
                }, {
                    't': '2023-01-27T00:00:00.000+00:00',
                    'open': 131.8,
                    'high': 135.4,
                    'low': 131.32,
                    'close': 134.26,
                    'v': 22579
                }, {
                    't': '2023-01-30T00:00:00.000+00:00',
                    'open': 133.7,
                    'high': 134.18,
                    'low': 131.72,
                    'close': 131.72,
                    'v': 14884
                }, {
                    't': '2023-01-31T00:00:00.000+00:00',
                    'open': 132.0,
                    'high': 132.7,
                    'low': 130.64,
                    'close': 132.7,
                    'v': 10188
                }, {
                    't': '2023-02-01T00:00:00.000+00:00',
                    'open': 132.48,
                    'high': 133.32,
                    'low': 129.74,
                    'close': 132.3,
                    'v': 26678
                }
            ],
            options: {
                call: [{name: "option", strike: 78.00, delta: "0.05", expiry: "2023-04-01"}, {
                    name: "option",
                    strike: 78.00,
                    delta: "0.05",
                    expiry: "2023-04-01"
                }, {name: "option", strike: 78.00, delta: "0.05", expiry: "2023-04-01"}],
                put: [{name: "option", strike: 78.00, delta: "0.05", expiry: "2023-04-01"}, {
                    name: "option",
                    strike: 10.00,
                    delta: "0.05",
                    expiry: "2023-04-01"
                }, {name: "option", strike: 78.00, delta: "0.05", expiry: "2023-04-01"}]
            }
        }
    }
)

mock.onGet("/api/instrument", {params: {name: "option"}}).reply(200, {
        ohlc: [
            {
                't': '2023-01-02T00:00:00.000+00:00',
                'open': 122.24,
                'high': 124.28,
                'low': 121.72,
                'close': 123.66,
                'v': 12511
            }, {
                't': '2023-01-03T00:00:00.000+00:00',
                'open': 122.46,
                'high': 124.62,
                'low': 117.62,
                'close': 118.8,
                'v': 37855
            }, {
                't': '2023-01-04T00:00:00.000+00:00',
                'open': 118.8,
                'high': 121.28,
                'low': 118.14,
                'close': 119.02,
                'v': 32556
            }, {
                't': '2023-01-05T00:00:00.000+00:00',
                'open': 119.24,
                'high': 121.16,
                'low': 118.52,
                'close': 118.84,
                'v': 24598
            }, {
                't': '2023-01-06T00:00:00.000+00:00',
                'open': 119.14,
                'high': 122.46,
                'low': 118.56,
                'close': 121.58,
                'v': 26983
            }, {
                't': '2023-01-09T00:00:00.000+00:00',
                'open': 122.02,
                'high': 124.12,
                'low': 121.06,
                'close': 121.26,
                'v': 24788
            }, {
                't': '2023-01-10T00:00:00.000+00:00',
                'open': 121.38,
                'high': 122.04,
                'low': 119.48,
                'close': 121.66,
                'v': 16322
            }, {
                't': '2023-01-11T00:00:00.000+00:00',
                'open': 122.02,
                'high': 124.0,
                'low': 121.12,
                'close': 124.0,
                'v': 24233
            }, {
                't': '2023-01-12T00:00:00.000+00:00',
                'open': 124.44,
                'high': 124.78,
                'low': 122.06,
                'close': 122.94,
                'v': 28889
            }, {
                't': '2023-01-13T00:00:00.000+00:00',
                'open': 122.88,
                'high': 124.54,
                'low': 121.8,
                'close': 124.32,
                'v': 17390
            }, {
                't': '2023-01-16T00:00:00.000+00:00',
                'open': 124.48,
                'high': 124.82,
                'low': 123.3,
                'close': 124.46,
                'v': 11113
            }, {
                't': '2023-01-17T00:00:00.000+00:00',
                'open': 124.2,
                'high': 126.92,
                'low': 123.52,
                'close': 126.0,
                'v': 21644
            }, {
                't': '2023-01-18T00:00:00.000+00:00',
                'open': 126.9,
                'high': 127.62,
                'low': 125.0,
                'close': 125.2,
                'v': 14812
            }, {
                't': '2023-01-19T00:00:00.000+00:00',
                'open': 125.24,
                'high': 125.7,
                'low': 123.28,
                'close': 124.94,
                'v': 14687
            }, {
                't': '2023-01-20T00:00:00.000+00:00',
                'open': 125.54,
                'high': 127.02,
                'low': 124.2,
                'close': 126.86,
                'v': 13891
            }, {
                't': '2023-01-23T00:00:00.000+00:00',
                'open': 126.56,
                'high': 131.96,
                'low': 125.92,
                'close': 129.92,
                'v': 23899
            }, {
                't': '2023-01-24T00:00:00.000+00:00',
                'open': 129.98,
                'high': 131.56,
                'low': 128.6,
                'close': 131.04,
                'v': 12735
            }, {
                't': '2023-01-25T00:00:00.000+00:00',
                'open': 130.26,
                'high': 130.66,
                'low': 127.48,
                'close': 129.88,
                'v': 14731
            }, {
                't': '2023-01-26T00:00:00.000+00:00',
                'open': 130.98,
                'high': 132.32,
                'low': 130.06,
                'close': 132.24,
                'v': 14422
            }, {
                't': '2023-01-27T00:00:00.000+00:00',
                'open': 131.8,
                'high': 135.4,
                'low': 131.32,
                'close': 134.26,
                'v': 22579
            }, {
                't': '2023-01-30T00:00:00.000+00:00',
                'open': 133.7,
                'high': 134.18,
                'low': 131.72,
                'close': 131.72,
                'v': 14884
            }, {
                't': '2023-01-31T00:00:00.000+00:00',
                'open': 132.0,
                'high': 132.7,
                'low': 130.64,
                'close': 132.7,
                'v': 10188
            }, {
                't': '2023-02-01T00:00:00.000+00:00',
                'open': 132.48,
                'high': 133.32,
                'low': 129.74,
                'close': 132.3,
                'v': 26678
            }
        ]
    }
)


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{
                headerStyle: {backgroundColor: "#123456",},
                headerTintColor: "#ffffff",
                headerTitleStyle: {fontFamily: fontBold},
                contentStyle: {backgroundColor: "#ffffff"}
            }}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="Reset Password" component={ResetPwdScreen}/>
                <Stack.Screen name="Headlines" component={HeadlineScreen}/>
                <Stack.Screen name="Article" component={ArticleScreen} options={({navigation, route}) => ({
                    title: route?.params?.article.headline,
                    headerRight: () => (<Button title="Trade" color="#2e2e2e"/>)
                })}/>
                <Stack.Screen name="Select Instrument" component={InstrumentSelectScreen}/>
                <Stack.Screen name="Trade Instrument" component={TradingScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
