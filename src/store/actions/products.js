import {filterProducts, getProducts} from "./client/product";
import {dispatcher} from "./common";
import ActionTypes from "./ActionTypes";

export const listProducts = () => {
    const dispatchers = dispatcher(ActionTypes.getProducts);

    return dispatch => {
        dispatch(dispatchers.start());
        getProducts().then(res=> {
            dispatch(dispatchers.success(res));
        }).catch(err => {
            dispatch(dispatchers.fail(err));
        });
    };
};

export const getFilteredProducts = (text) => {
    const dispatchers = dispatcher(ActionTypes.filterProducts);

    return dispatch => {
        dispatch(dispatchers.start());
        filterProducts(text).then(res=> {
            dispatch(dispatchers.success(res));
        }).catch(err => {
            dispatch(dispatchers.fail(err));
        });
    };
};

