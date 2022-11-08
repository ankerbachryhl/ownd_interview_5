import * as React from 'react'
import styled from 'styled-components'
import {StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import {SearchBar} from "react-native-elements";
import {useEffect, useState} from "react";
import theme from '../lib/styled-theme'
import getAsks from '../lib/asks_hook'


const Root = styled(View)`
  overflow: hidden;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  margin-top: 10px;
  padding: 20px;
  background-color: #fff;
  width: 100%;
`

const ListItem = styled(View)`
  margin-top: 10px;
  padding: 20px;
  align-items: center;
  background-color: #fff;
  width: 100%;
`

const CustomFlatList = styled(FlatList)`
  flex: 0.1;
  width: 80%;
  border: 1px solid black;
`

const CustomText = styled(Text)`
  font-size: ${props => (typeof props.fontSize === 'number') ? props.fontSize : theme.typography[props.fontSize]};
  color: ${props => props.color ? props.color : 'black'};
`

const CustomSearchBar = styled(SearchBar)`
  flex: 1;
`

const CustomButton = styled(TouchableOpacity)`
  background-color: #28282B;
  border-radius: 38px;
  width: 240px;
  height: 56px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  font-weight: 600;

`

type IProps = {

}

const MainScreen = (props: IProps) => {
    const [search, setSearch] = useState('');

    const searchFilterFunction = async (contractAddress) => {
        setSearch(contractAddress);


    };



    useEffect(() => {

    }, [])


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Root>


              <CustomText fontSize="lg">Paste in a contract address </CustomText>
              <CustomSearchBar
                  round
                  containerStyle={{borderWidth: 1, borderRadius: 5, width: '100%'}}
                  searchIcon={{ size: 24 }}
                  onChangeText={(text) => searchFilterFunction(text)}
                  onClear={(text) => searchFilterFunction('')}
                  placeholder="Type Here..."
                  value={search}
              />

              <CustomButton>
                  <CustomText fontSize="sm" color="white">Find listings</CustomText>
              </CustomButton>

              <CustomFlatList
                  data={search}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                      <ListItem>
                          <CustomText fontSize="xs">{item.title}</CustomText>
                      </ListItem>
                  )}
              />
          </Root>
        </TouchableWithoutFeedback>
  )
}

export default MainScreen