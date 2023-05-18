import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    product: [],
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
        },
        addProduct: (state,action) => {
            state.product.push(action.payload)
        },
        clearProduct: (state,action) => {
            state.product = [];
        }
    },
})

export const {addBasket, removeBasket, addProduct, clearProduct} = productsSlice.actions;
export default productsSlice.reducer;