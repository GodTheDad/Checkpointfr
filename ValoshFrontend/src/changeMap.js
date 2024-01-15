import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mapSelected: "",
}


export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
      setMap: (state, action) => {
        state.mapSelected = action.payload
      },
    },
})


export const { setMap } = mapSlice.actions

export default mapSlice.reducer