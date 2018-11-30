import List from './ListReducer';
const FemaleReducer = (state = List, action) => {
    switch(action.type) {
        case 'CHEACKED_FEMALE':
             return { ...state, checkedFemale : action.checkedFemale };
        default:
            return state;
    }
};
export default FemaleReducer;