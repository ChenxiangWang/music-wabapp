import * as actionTypes from './constants';

import { getTopBanners } from '@/services/recommend';

const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNER,
    data: res.banners,
})

export const getTopBannerAction = function () {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res))
        })
    }
}