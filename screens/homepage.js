import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Linking, ImageBackground } from 'react-native';
import {Separator, Button} from '../components/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar';


class Homepage extends Component {
    navigateToListArticle = () => {
        this.props.navigation.navigate('Article')
    }

  render() {
    const fullName = "Fadhlan Syahran Jungjungan";
    const nim = "1203210064";
    const address = "Wiyung, Surabaya";
    const kampus = "Institut Teknologi Telkom Surabaya";

    return (
      <View style={{ flex: 1}}>
        <StatusBar style='auto' />
        <ImageBackground 
        source={require('../assets/background.png')}
        style={{ flex: 0.5 }}
        resizeMode={'cover'}
        ><View style={{flex: 0.5}}></View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor:'#FFFFFF'}}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../assets/profile.jpg')} 
          style={{ 
            width: 100, 
            height: 100, 
            borderRadius: 100/2,
            borderWidth: 3,
            borderColor: '#FFFFFF',
            position: 'absolute',
            zIndex: 2
            }}/>
          </View>
          <View style={{marginTop: 60}}>
            <Text style={styles.nama}>{fullName}</Text>
            <Text style={styles.desc}>{nim}</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../assets/logoif.png')} 
              style={{
                resizeMode: 'contain',
                width: 100,
                height: 50,
              }}
              />
            </View>
            <View style={{marginLeft: 75}}>
              <View style={styles.Listsosmed}>
                <View style={styles.iconstyles}>
                  <Icon name="whatsapp" size={25} color="#212121" />
                </View>
                <View style={styles.content}>  
                  <Text style={styles.keterangan}>+62-811-369-1503</Text>
                </View>
              </View>
              <View style={styles.Listsosmed}>
                <View style={styles.iconstyles}>
                  <Icon name="map-marker-alt" size={25} color="#212121" />
                </View>
                <View style={styles.content}>  
                  <Text style={styles.keterangan}>{address}</Text>
                </View>
              </View>
              <View style={styles.Listsosmed}>
                <View style={styles.iconstyles}>
                  <Icon name="university" size={25} color="#212121" />
                </View>
                <View style={styles.content}>  
                  <Text style={styles.keterangan}>{kampus}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 40, marginHorizontal: 30}}>
            <TouchableOpacity 
            style={styles.betweenicons} 
            onPress={() => Linking.openURL('https://www.facebook.com/fadhlanfsj/')}>
              <Icon name="facebook-square" size={25} color="#212121" />
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.betweenicons}
            onPress={() => Linking.openURL('https://www.instagram.com/fadhlan_64/')}
            >
              <Icon name="instagram" size={25} color="#212121" />
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.betweenicons}
            onPress={() => Linking.openURL('https://github.com/FadhlanFSJ')}
            >
              <Icon name="github" size={25} color="#212121" />
            </TouchableOpacity>
          </View>
        </View>
        
        <TouchableOpacity>
          <Button 
            text="List Article"
            onPress={this.navigateToListArticle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Homepage;

const styles = {
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginTop: 10,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
  },
  Listsosmed: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  keterangan: {
    fontWeight: 'bold',
    
  },
  content:{
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
  },
  iconstyles:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40
  },
  betweenicons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
};
