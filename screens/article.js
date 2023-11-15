import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image, Dimensions } from 'react-native';
import React, { Component } from 'react';
import { Separator, Button } from '../components/index';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

const windowWidth = Dimensions.get("window").width;

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }
  componentDidMount(){
    this.getData();
  }
  backToHomepage = () => {
    this.props.navigation.navigate('Homepage')
  }
  getData = () => {
    fetch('https://raw.githubusercontent.com/dauditts/pm-static-api/main/articles.json')
      .then((response) => response.json())
       .then((json) => {
        this.setState({ data: json.articles, isLoading : false});
      })
      .catch((error) => {
        console.error(error);
      });
  };
  renderItem = ({ item }) => {
    const {navigation} = this.props;
    return (
        <>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DetailArticle', {data: item})}>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View style={{ flexDirection: "column"}}>
                    <Text style={styles.itemText}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
        <View style={styles.itemBorder}></View>
        </>
    )
  }

  render() {
    if (this.state.isLoading){
      <View style={styles.container}>
        <ActivityIndicator size="large" color='blue' />
      </View>
    }else{
      return (
          <View style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id}
            />
            {/* <TouchableOpacity>
                <Button
                    text="Back"
                    onPress={this.backToHomepage}
                />
            </TouchableOpacity> */}
          </View>
      );
    }
  }
}

export default Article;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    item: {
      padding: 20,
      backgroundColor: "white",
    },
    itemBorder: {
      borderWidth: 0.5,
      borderColor: "#cccccc",
    },
    itemImage: {
      width: 100,
      height: 80,
    },
    itemText: {
      fontSize: 15,
      width: windowWidth - 150,
      marginLeft: 15,
      fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 15,
    }
  });