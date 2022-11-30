import {createSlice} from "@reduxjs/toolkit";
import {Statuses} from "../../constants/statuses";

const initialState ={
    entities:{},
    ids:[],
    status: Statuses.idle,
};

export const reviewSlice = createSlice({
    name:"review",
    initialState,
    reducers:{
        startLoading: (state) => {
            state.satus = Statuses.inProgress;
        },
        successLoading: (state,action)=>{
            state.satus = Statuses.success;
            state.entities = { ...state.entities, ...action.payload.entities };
            state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
        },
        failLoading: (state) => {
            state.satus = Statuses.failed;
        },
    }
});