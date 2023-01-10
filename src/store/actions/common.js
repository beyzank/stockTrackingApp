export const dispatcher = (actionType) => {
    return {
        start: () => {
            return {type: actionType.START, context: actionType.context}
        },
        success: (result) => {
            return {type: actionType.SUCCESS, payload: result, context: actionType.context}
        },
        fail: (result) => {
            return {type: actionType.FAIL, error: result, context: actionType.context}
        },
    };
};
