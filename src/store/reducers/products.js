import ActionTypes from "../actions/ActionTypes";

const initialState = {
    products: null,
    filteredProducts: null,
}
const products = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.getProducts.SUCCESS:
            return getProductsSuccess(state, action);
        case ActionTypes.filterProducts.SUCCESS:
            return getFilteredProductsSuccess(state, action)
        default:
            return state;
    }
};

const getProductsSuccess = (state, action) => {
    return {
        ...state,
        ...{products: action.payload}
    };
}

const getFilteredProductsSuccess = (state, action) => {
    return {
        ...state,
        ...{filteredProducts: action.payload}
    };
}
export default products;
