import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export type PokedexLimitState = {
    value: number
}

const initialState: PokedexLimitState = {
    value: 25,
}

export const pokedexLimitSlice = createSlice({
    name: 'pokedexLimit',
    initialState,
    reducers: {
        loadMore: (state) => {
            state.value += 20
        },
    },
})

export const {loadMore} = pokedexLimitSlice.actions

export default pokedexLimitSlice.reducer