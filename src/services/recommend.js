import request from './request';

export function getTopBanners() {
    return request({
        url: "/banner",
    })
}

export function getHotRecommend(limit) {
    return request({
        url: "/personalized",
        params: {
            limit
        }
    })
}

export function getNewAlbums (limit) {
    return request({
        url: '/top/album',

        // 拼接的url参数
        params: {
            limit,
        }
    })
}