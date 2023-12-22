import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Show} from '../../type';

interface ShowsState {
  searchResults: Show[];
}

const initialState: ShowsState = {
  searchResults: [],
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setSearchResults(state, action: PayloadAction<Show[]>) {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchResults } = showsSlice.actions;
export default showsSlice.reducer;
