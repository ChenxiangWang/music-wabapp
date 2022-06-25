import React, { memo } from 'react';
import TopBanner from './child-components/top-banner';
import HotRecommend from  './child-components/hot-recommend';
import NewAlbums from './child-components/new-album';
import RecomendRanking from './child-components/recommend-ranking';

import {
    RecommendWrapper,
    RecommendLeft,
    RecommendRight,
    Content,
} from "./style"



function Recommand(props) {

    return (
        <RecommendWrapper>
            <TopBanner />
            <Content className={"wrap-v2"}>
                <RecommendLeft>
                    <HotRecommend />
                    <NewAlbums />
                    <RecomendRanking />
                </RecommendLeft>
                <RecommendRight>
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}
export default memo(Recommand);

// const mapStateToProps = state => ({
//     topBanners : state.recommend.topBanners,
// })
//
// const mapDispatchToProps = dispatch => ({
//     getBanners : () => dispatch(getTopBannerAction()),
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommand));
