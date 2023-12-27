const initState = {
    counter: 0,
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'increaseCounter':
            const { step } = action.payload;
            return {
                counter: state.counter + step,
            };
        case 'setCounter':
            return {
                counter: action.payload.value,
            };
        default: 
            return state;
    }
}

export default reducer;