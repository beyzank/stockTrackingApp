class ActionTypes {

    constructor(context, key) {
        this.context = context;
        this.START = key + '_START';
        this.FAIL = key + '_FAIL';
        this.SUCCESS = key + '_SUCCESS';
    }

    with(other) {
        this[other] = other;
        return this;
    }
}

export default {
    getProducts: new ActionTypes("product","getProducts"),
    filterProducts: new ActionTypes("product","filterProducts"),

}


