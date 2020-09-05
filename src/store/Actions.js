import axios from 'axios'

export const fetchDataFromAPI = items => {
    console.log("Inside fetchDataFromAPI")
    return {
        type: "FETCHDATA",
        payload: items
    }
}


export const fetchItems = () => {
    return (dispatch) => {
        console.log("Insided fetchItems actionCreator")
        dispatch(fetchDataFromAPI)
        axios.get('https://cors-anywhere.herokuapp.com/ace.qtstage.io/api/v1/collections/entertainment').then(res => {
            const items = res.data.items
            console.log(res.data.items)
            dispatch(fetchDataFromAPI(items))
        });

    }
}


