import axios from 'axios'

export const fetchDataFromAPI = items => {
    return {
        type: "FETCHDATA",
        payload: items
    }
}


export const fetchItems = () => {
    return (dispatch) => {
        dispatch(fetchDataFromAPI)
        axios.get('https://cors-anywhere.herokuapp.com/ace.qtstage.io/api/v1/collections/entertainment').then(res => {
            const items = res.data.items
            dispatch(fetchDataFromAPI(items))
        });

    }
}


