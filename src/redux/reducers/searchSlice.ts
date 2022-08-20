import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Word } from '../../types/api';


export interface SearchState {
    searchedList: string[];
    results: Word[]
}

const initialState: SearchState = {
    searchedList: [],
    results: []
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addElement: (state, action) => {
            state.searchedList.push(action.payload);
        },
        changeResults: (state, action) => {
            state.results = action.payload;
        }
    }
});

export const { addElement, changeResults } = searchSlice.actions;

export const selectSearchList = (state: RootState) => state.search.searchedList;
export const selectResults = (state: RootState) => state.search.results;

export default searchSlice.reducer;