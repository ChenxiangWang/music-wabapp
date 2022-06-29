import { Map } from 'immutable';
import * as actionTypes from './constants'

const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],
})

export default function reducer(state = defaultState, action) {

    switch (action.type) {

        case actionTypes.CHANGE_TOP_BANNER:
            return state.set('topBanners', action.data);

        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommends', action.data);

        case actionTypes.CHANGE_NEW_ALBUMS:
            return state.set('newAlbums', action.data);

        default:
            return state;
    }
}