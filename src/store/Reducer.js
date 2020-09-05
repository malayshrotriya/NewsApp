
const initialState = {
    items: [],
    search: ''
}

const reducer = (state = initialState, action) => {

    if (action.type === "FETCHDATA") {
        return {
            ...state, items: action.payload
        }
    } if (action.type === "SEARCH") {
        console.log("Inside SEARCH")
        return {
            ...state, search: action.payload
        }
    } else {
        return state;
    }
}

export default reducer;
