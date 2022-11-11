import {createSlice} from "@reduxjs/toolkit";
import {Statuses} from "../../constants/statuses";

const initialState ={
    entities:{},
    ids:[],
    status: Statuses.idle,
};

export const genreSlice = createSlice({
    name:'genre',
    initialState,
    reduces:{
        startLoading: (state, action) => {
            state.satus = Statuses.inProgress;
            state.entities ={};
            state.ids = [];
        },
        successLoading: (state,action)=>{
            state.satus = Statuses.success;
            state.entities = action.payload.entities;
            state.ids = action.payload.ids;
        },
        failLoding: (state,action) => {
            state.satus = Statuses.failed;
            state.entities ={};
            state.ids = [];
        },
    }
});