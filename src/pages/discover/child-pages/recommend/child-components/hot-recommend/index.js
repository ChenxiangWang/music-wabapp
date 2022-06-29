import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import SongsCover from '@/components/songs-cover';

import {
    HotRecommendWrapper
} from './style';
import {getHotRecommendAction} from '../../store/action';

export default memo(function HotRecommend() {
    // state

    // redux hooks
    const dispatch = useDispatch();
    const { hotRecommends } = useSelector( state => ({
        hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }), shallowEqual);
    // other hooks
   useEffect(() => {
       dispatch(getHotRecommendAction(8));
   }, [dispatch])
    return (
        <HotRecommendWrapper>
            <ThemeHeaderRCM title={"热门推荐"} keywords={['华语', '流行', '民谣', '摇滚', '电子']}/>
            <div className='recommend-list'>
                {
                    hotRecommends.map((item, index) => {
                        return <SongsCover key={item.id} info={item}/>
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
