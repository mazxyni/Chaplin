import { configureStore, createSlice } from '@reduxjs/toolkit'



// 여행 시작날짜
let startDate = createSlice({
  name : 'startDate',
  initialState : new Date(),
  reducers : {
    setStartDate(state, action) {
      return action.payload
    }
  }
})
export let { setStartDate } = startDate.actions


// 여행 종료 날짜
let endDate = createSlice({
  name : 'endDate',
  initialState : null,
  reducers : {
    setEndDate(state, action) {
      return action.payload
    }
  }
})
export let { setEndDate } = endDate.actions

export default configureStore({
  reducer: {
    startDate : startDate.reducer,
    endDate : endDate.reducer 
   }
}) 
