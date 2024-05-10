import {configureStore} from '@reduxjs/toolkit'
import pokedexLimitReducer from "@/lib/features/pokedexLimitSlice";
import pokemonSideReducer from "@/lib/features/pokemonSideSlice";
import selectedTypeReducer from "@/lib/features/selectedTypeSlice";
import pokemonSearchReducer from "@/lib/features/pokemonSearchSlice";
import currentPokemonReducer from "@/lib/features/currentPokemonSlice";
// ...

export const store = configureStore({
    reducer: {
        pokedexLimit: pokedexLimitReducer,
        pokemonSide: pokemonSideReducer,
        selectedType: selectedTypeReducer,
        pokemonSearch: pokemonSearchReducer,
        currentPokemon: currentPokemonReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
