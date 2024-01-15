import { configureStore } from '@reduxjs/toolkit'
import agentReducer from './changeAgent.js'
import mapReducer from './changeMap.js'
export const store = configureStore({
  reducer: {
    agentChange: agentReducer,
    mapChange: mapReducer
  },
})