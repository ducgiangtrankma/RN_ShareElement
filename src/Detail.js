import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

export default function Detail({navigation, route}) {
  const {data} = route.params;

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <SharedElement id={`item.${data.id}.image`}>
        <Image
          style={{height: 200, width: '90%', alignSelf: 'center'}}
          source={{
            uri: data.uri,
          }}
        />
      </SharedElement>
    </SafeAreaView>
  );
}
