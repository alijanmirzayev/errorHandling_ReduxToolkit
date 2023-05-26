import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { } from 'react-redux'
import { } from 'redux'

interface initalState {
    data: [],
    loading: 'pending' | 'fulfilled' | 'rejected' | null,
    error: any,
    length: number
}

const initalState: initalState = {
    data: [],
    loading: null,
    error: null,
    length: 0
}

export const getAllCustomer = createAsyncThunk('customer/getAll', async (data, { rejectWithValue }) => {
    try {
        const res = await axios.get('https://northwind.vercel.app/api/customerss/')
        return res.data
    } catch (error) {
        return rejectWithValue('Xəta baş verdi')
    }
})

const CustomerSlice = createSlice({
    name: 'Customers',
    initialState: initalState,
    reducers: {
        getCustomerLength: (state) => {
            state.length = state.data.length
        }
    },
    extraReducers: builder => {
        builder.addCase(getAllCustomer.pending, (state, action) => {
            state.loading = 'pending'
        }).addCase(getAllCustomer.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = 'fulfilled'
        }).addCase(getAllCustomer.rejected, (state, action) => {
            state.loading = 'rejected'
            state.error = action.payload
        })
    }
})

export default CustomerSlice.reducer
export const { getCustomerLength } = CustomerSlice.actions