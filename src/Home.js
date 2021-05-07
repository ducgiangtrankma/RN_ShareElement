import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
const data = {
  id: 1,
  uri:
    'https://images.pexels.com/photos/3435272/pexels-photo-3435272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail', {data});
        }}>
        <SharedElement id={`item.${data.id}.image`}>
          <Image
            style={{height: 200, width: '90%', alignSelf: 'center'}}
            source={{
              uri: data.uri,
            }}
          />
        </SharedElement>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
