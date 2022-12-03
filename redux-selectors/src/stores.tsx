import { createReducer, createAction, configureStore } from "@reduxjs/toolkit";

export const addToFirst = createAction("addToFirst");
export const addToSecond = createAction("addToSecond");
export const doNothing = createAction("doNothing");

const ValuesReducer = createReducer<{
    firstNumber: number;
    secondNumber: number;
    numbers: number[];
}>( {
    firstNumber: 0,
    secondNumber: 0,
    numbers: []
}, (builder) => {
    builder.addCase(addToFirst, (state, action) => {
        state.firstNumber++;
        state.numbers= [state.firstNumber];
    });
    builder.addCase(addToSecond, (state, action) => {
        state.secondNumber++;
        state.numbers= [state.firstNumber];
    });
    builder.addCase(doNothing, (state) => ({...state}) )
} );


export const store = configureStore({
    reducer: ValuesReducer,

});

export type RootState = ReturnType<typeof store.getState>;