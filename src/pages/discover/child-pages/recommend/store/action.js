import * as actionTypes from './constants';

import { getTopBanners, getHotRecommend } from '@/services/recommend';

const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNER,
    data: res.banners,
})

const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    data: res.result,
})

export const getTopBannerAction = function () {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res))
        })
    }
}



export const getHotRecommendAction = function(limit) {
    return dispatch => {
        getHotRecommend(limit).then(res =>  {
            dispatch(changeHotRecommendAction(res));
        })
    }
}