import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    count: 0,
    fullPrice: 0,
}

function setPrice(state) {
    state.fullPrice = state.basket.reduce(function(sum, i) {
        return sum + i.cost;
    }, 0);
}

function setCount(state) {
    state.count = state.basket.length;
}

export const productsSlice = createSlice({
    name: 'productsRedux',
    initialState,
    reducers: {
        incCount: (state) =>{
            state.count = state.count + 1
        },
        addBasket: (state,action) => {
            state.basket.push(action.payload)
            setPrice(state)
            setCount(state)
        },
        removeBasket: (state,action) => {
            state.basket = state.basket.filter((item)=> {
                return item.uuid !== action.payload;
            })
            setPrice(state)
            setCount(state)
        }
    },
})

export const {addBasket, removeBasket, incCount} = productsSlice.actions;
export default productsSlice.reducer;