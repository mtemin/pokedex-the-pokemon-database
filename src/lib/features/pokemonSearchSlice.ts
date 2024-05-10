import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export type PokemonSearchState = {
    value: string
}

const initialState: PokemonSearchState = {
    value: "",
}

export const pokemonSearchSlice = createSlice({
    name: 'pokemonSearch',
    initialState,
    reducers: {
        setPokemonSearch: (state, action) => {
            state.value = action.payload
        },
    },
})

export const {setPokemonSearch} = pokemonSearchSlice.actions

export default pokemonSearchSlice.reducer
