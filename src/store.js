import { configureStore, createSlice } from '@reduxjs/toolkit'

// 여행 지역
let region = createSlice({
  name : 'region',
  initialState : {},
  reducers : {
    setChosenRegion(state, action) {
      
      return action.payload
    }
  }
})
export let {setChosenRegion} = region.actions


// 여행 시작날짜
let chosenStartDate = createSlice({
  name : 'chosenStartDate',
  initialState : null,
  reducers : {
    setChosenStartDate(state, action) {
      return action.payload
    }
  }
})
export let { setChosenStartDate } = chosenStartDate.actions


// 여행 종료 날짜
let chosenEndDate = createSlice({
  name : 'chosenEndDate',
  initialState : null,
  reducers : {
    setChosenEndDate(state, action) {
      return action.payload
    }
  }
})
export let { setChosenEndDate } = chosenEndDate.actions

// 여행 날짜 배열
let chosenDateArray = createSlice({
  name : 'chosenDateArray',
  initialState : [],
  reducers : {
    setChosenDateArray(state, action) {
      return action.payload
      
    }
  }
})
export let {setChosenDateArray} = chosenDateArray.actions

// 일정표 목록
let schedule = createSlice({
  name:'schedule',
  initialState : [],
  reducers : {
    setSchedule(state, action) {
      //console.log(action.payload)
      return [...state, action.payload]
    }
  }
})
export let {setSchedule} = schedule.actions

// 일정표 세부 목록
let chosenPlace = createSlice({
  name : 'chosenPlace',
  initialState : [],
  reducers : {
    setChosenPlace(state, action) {
      //console.log(action.payload)
      return [...state, action.payload]
    }
  }
})
export let {setChosenPlace} = chosenPlace.actions



export default configureStore({
  reducer: {
    region : region.reducer,
    chosenStartDate : chosenStartDate.reducer,
    chosenEndDate : chosenEndDate.reducer,
    chosenDateArray : chosenDateArray.reducer,
    schedule : schedule.reducer,
    chosenPlace : chosenPlace.reducer
    
   }
}) 
