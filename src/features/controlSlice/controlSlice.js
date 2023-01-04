import { createSlice } from "@reduxjs/toolkit";
const initialState={
    open:false,
    toDelete:null,
    edit:null,
    all:false
}

export const controlSlice=createSlice({
    name:'control',
    initialState,
    reducers:{
addOpen:state=>{
    state.open=true
},

addClose :state=>{
    state.open=false
},

addDelete:(state,action)=>{
    state.toDelete=action.payload
},
addEdit:(state,action)=> {
    state.edit=action.payload
},
addAll:state=>{state.all=true},
addNone:state=>{state.all=false}



    }

})

export const {addOpen ,addClose,addDelete ,addEdit,addAll,addNone}= controlSlice.actions;
export default controlSlice.reducer