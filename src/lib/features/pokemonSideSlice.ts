import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export type PokemonSideState = {
    value: 'front' | 'back'
}

const initialState: PokemonSideState = {
    value: 'front',
}

export const pokemonSideSlice = createSlice({
    name: 'pokemonSide',
    initialState,
    reducers: {
        switchSide: (state) => {
            state.value = state.value === 'front' ? 'back' : 'front';
        },

    },
})

export const {switchSide} = pokemonSideSlice.actions
export default pokemonSideSlice.reducer