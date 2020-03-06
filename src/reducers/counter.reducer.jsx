const initial_state={
    count:0,
    step:1
}
const counterReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count+state.step
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count-state.step
            };
        case 'CHANGE_STEP':
            return {
                ...state,
                step: action.payload.step
            }
        default:
            return state;
    }
}

export default counterReducer;