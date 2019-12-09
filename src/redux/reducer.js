import axios from 'axios'

const initialState = {
    monster: {},
    loading: false,
    errorMessage: ''
}

const GET_MONSTER = "GET_MONSTER"

export function setMonsters (){
    const monster = axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then(res => res.data.results[0])
        .catch(err => err.message)
    return {
        type: GET_MONSTER,
        payload: monster
    }
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case GET_MONSTER + '_PENDING':
            return {...state, loading: true}
        case GET_MONSTER + '_FULFILLED':
            return {...state, monster: payload, loading: false}
        case GET_MONSTER + '_REJECTED':
            return {...state, errorMessage: payload, loading: false}
        default: return state
    }
}