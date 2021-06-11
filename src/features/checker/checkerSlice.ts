import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CheckerState {
  id: string;
}

const initialState: CheckerState = {
  id: '',
};


export const checkerSlice = createSlice({
  name: 'checker',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = checkerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.checker.value)`
export const selectId = (state: RootState) => state.checker.id;

export default checkerSlice.reducer;
