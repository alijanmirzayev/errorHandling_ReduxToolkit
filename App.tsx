import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { AppDispatch, StateType, store } from './src/redux'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCustomer } from './src/redux/slice/CustomerSlice'
import Main from './src/components/main'


export default function App() {

  return (
    <Provider store={store}>

      <View style={{marginHorizontal: 16, marginTop: 32}}>
        <Main />
      </View>
    </Provider>

  )
}