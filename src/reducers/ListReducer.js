
const ListReducer = (state = {}, action) => {
    switch(action.type) {
        case 'INITIAL_LIST':
            return action.payload;
        case 'INITIAL_LOAD':
           return {...state,loading:action.payload}
        case 'INITIAL_ERROR' :
            return {...state,loading:action.payload.loading,error:action.payload.error}
        default:
            return state;
    }
};
export default ListReducer;