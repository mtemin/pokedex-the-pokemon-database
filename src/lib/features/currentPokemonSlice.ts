import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export type CurrentPokemonState = {
    value: string | number
}

const initialState: CurrentPokemonState = {
    value: "",
}

export const currentPokemonSlice = createSlice({
    name: 'currentPokemon',
    initialState,
    reducers: {
        setCurrentPokemon: (state, action) => {
            if (typeof action.payload === 'string') {
                state.value = (action.payload).toLowerCase();
            } else {
                state.value = action.payload
            }
        },
    },
})

export const {setCurrentPokemon} = currentPokemonSlice.actions

export default currentPokemonSlice.reducer
