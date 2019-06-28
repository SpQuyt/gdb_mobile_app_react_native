import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

import stateStorage from '../config/stateStorage';
import HeadBar from '../components/HeadBar';
import BasicInfo from '../components/BasicInfo';

export default class ProfileScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <HeadBar title="Profile" />
        <BasicInfo name="Anthony Q" email="spquyt@gmail.com" />

        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <View style={styles.leftIcon}><SimpleLineIcons name="social-dropbox" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Order</Text>
            <Text style={styles.description}>Check your order status</Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <View style={styles.leftIcon}><Feather name="bookmark"  size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Wishlist</Text>
            <Text style={styles.description}>Your most loved styles & collections</Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <View style={styles.leftIcon}><Feather name="award" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Shoppie Points</Text>
            <Text style={styles.description}>Earn points & use in checkout</Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { borderBottomWidth: 1, }]} onPress={() => { }}>
          <View style={styles.leftIcon}><SimpleLineIcons name="home" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Address</Text>
            <Text style={styles.description}>Save addresses for a hassle free checkout</Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { marginTop: 10, }]} onPress={() => { }}>
          <View style={styles.leftIcon}><Foundation name="page-edit" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Profile Details</Text>
            <Text style={styles.description}>Changes your profile & password</Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { borderBottomWidth: 1, }]} onPress={() => { }}>
          <View style={styles.leftIcon}><Feather name="settings" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.description}>Manage notifications & app settings</Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.signOutButton} onPress={() => { }}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>

      </ScrollView >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stateStorage.backgroundColor,
  },
  button: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  leftIcon: {
    width: stateStorage.SCREEN_WIDTH * 0.1,
    paddingTop: 5,
    paddingRight: 7,
    alignItems: 'flex-end',
  },
  textContainer: {
    justifyContent: 'center',
    width: stateStorage.SCREEN_WIDTH * 0.8,
  },
  rightIcon: {
    width: stateStorage.SCREEN_WIDTH * 0.1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  description: {
    fontSize: 12,
  },
  footer: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  signOutButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
})                                                                