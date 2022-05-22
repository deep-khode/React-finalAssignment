

export const reducer = (state={}, action) => {
    console.log(action);
    if(action.type === 'storeAPIData'){
        return action.payload;
    }

    return state
}