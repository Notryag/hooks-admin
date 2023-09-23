import {createSlice, configureStore} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers :{
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
  }
})

export const {increment, decrement}  = counterSlice.actions


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

store.subscribe(() => console.log(store.getState()))


export type RootState = ReturnType<typeof store.getState>

export const selectCount = (state: RootState) => state.counter.value
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector
