import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export type SelectedTypeState = {
    value: string | null
}

const initialState: SelectedTypeState = {
    value: null,
}

export const selectedTypeSlice = createSlice({
    name: 'selectedType',
    initialState,
    reducers: {
        setType: (state, action) => {
            state.value = (action.payload.type).toLowerCase();
            // console.log(action.payload.type)
        },
    },
})

export const {setType} = selectedTypeSlice.actions

export default selectedTypeSlice.reducer