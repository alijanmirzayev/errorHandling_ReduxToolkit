import { View, Text, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { AppDispatch, StateType } from '../redux'
import { getAllCustomer, getCustomerLength } from '../redux/slice/CustomerSlice'


export default function Main() {

    let dispatch = useDispatch<AppDispatch>()
    const { data, loading, error, length } = useSelector((state: StateType) => state.CustomerSlice)

    console.log('Error', error)

    useEffect(() => {
        dispatch(getAllCustomer())
    }, [])

    useEffect(() => {
        dispatch(getCustomerLength())
    }, [data])

    const renderItem = ({ item }: any) => {
        return (
            <Text style={{ color: 'white', fontSize: 21, marginBottom: 8 }}>{item.companyName}</Text>
        )
    }

    return (
        <>
            <View>
                <Text style={{ color: 'orange', fontSize: 34, marginBottom: 8, textAlign: 'center' }}>Total Customers: {length}</Text>
            </View>

            <View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                />
            </View>
        </>
    )
}