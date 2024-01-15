import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  agentSelected: "",
}


export const agentSlice = createSlice({
    name: 'agent',
    initialState,
    reducers: {
      setAgent: (state, action) => {
        state.agentSelected = action.payload
      },
    },
})


export const { setAgent } = agentSlice.actions

export default agentSlice.reducer