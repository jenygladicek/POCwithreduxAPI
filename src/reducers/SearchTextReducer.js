import List from './ListReducer';
const SearchTextReducer = (state = List, action) => {
    switch(action.type) {
        case 'SEARCH_TEXT':
            return { ...state, searchText : action.searchText };
        default:
            return state;
    }
};
export default SearchTextReducer;