import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    Linking,
} from "react-native";
import { Separator, Button } from '../components/index';
import Article from './article';

const windowWidth = Dimensions.get("window").width;

class DetailArticle extends Component {
    backHomepage = () => {
        this.props.navigation.navigate('Article');
    }
    render() {
        const { route } = this.props;
        const data = route.params.data;

        return (
            <>
            <View style={styles.container}>
                <Image source={{ uri: data.image }} style={styles.image} />
                <Separator height={10} />
                <View style={{ padding: 10 }}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Separator height={10} />
                    <Text style={styles.date}>Diubah pada tanggal : {data.date}</Text>
                    <Separator height={10} />
                    <Text style={styles.text}>{data.content}</Text>
                    <Separator height={20} />
                </View>
                <Button
                    text="Read More"
                    onPress={() =>
                        Linking.openURL(data.link).catch((err) => console.error("Error", err))
                    }
                />
            </View>
            <Button text="Back" onPress={() => this.backHomepage()}/>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
    },
    image: {
      width: windowWidth - 30,
      height: 200,
      resizeMode: "stretch",
    },
    date: {
        fontWeight: 'bold'
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
    },
    text: {
      fontSize: 16,
    },
});

export default DetailArticle;
