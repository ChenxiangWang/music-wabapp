import * as actionTypes from './constants'

const defaultState = {
    topBanners: []
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNER:
            return {...state, topBanners: action.data}
        default:
            return state
    }
}