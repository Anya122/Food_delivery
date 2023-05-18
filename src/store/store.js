import {configureStore} from "@reduxjs/toolkit";
import productsRedux from '../store/reducers/products.js'

export const store = configureStore({
    reducer: {
        products: productsRedux
    }
})