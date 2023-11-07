import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    Linking,
    ScrollView
} from "react-native";
import { Separator, Button } from '../components/index';

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
            <ScrollView>
                <View style={styles.container}>
                    <Image source={{ uri: data.image }} style={styles.image} />
                    <Separator height={10} />
                    <View style={styles.splicingContainer}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Separator height={10} />
                        <Text style={styles.date}>Diubah pada tanggal : {data.date}</Text>
                        <Separator height={10} />
                        <Text style={styles.content}>{'\u00A0\u00A0\u00A0\u00A0\u00A0'}{data.content}</Text>
                        <Separator height={20} />
                    </View>
                    <Button
                        text="Read More"
                        onPress={() =>
                            Linking.openURL(data.link).catch((err) => console.error("Error", err))
                        }
                    />
                </View>
                
            </ScrollView>
            <Button text="Back" onPress={() => this.backHomepage()} style={styles.backbtn}/>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
    },
    BackgroundArticle: {
        flex: 1,
    },
    image: {
      width: windowWidth - 30,
      height: 200,
      resizeMode: "stretch",
    },
    date: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: 'center'
    },
    content: {
      fontSize: 15,
      textAlign: 'justify',
      fontFamily: 'serif',
    },
    splicingContainer: {
        padding: 10,
    },
    backbtn:{
        backgroundColor: 'transparent', // Mengatur latar belakang menjadi transparan
        position: 'absolute', // Mengubah posisi button menjadi absolute
        top: 10, // Atur posisi vertical button
        left: 10, // Atur posisi horizontal button
        zIndex: 1, // Atur zIndex untuk mengatur urutan tampilan
    }
});

export default DetailArticle;
