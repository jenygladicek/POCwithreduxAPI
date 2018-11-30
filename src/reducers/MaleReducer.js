import List from './ListReducer';
const MaleReducer = (state = List, action) => {
    switch(action.type) {
        case 'CHECKED_MALE':
             return { ...state, checkedMale : action.checkedMale };
        default:
            return state;
    }
};
export default MaleReducer;