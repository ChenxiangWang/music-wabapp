import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getTopBannerAction } from '../../store/action';

import { Carousel } from 'antd';
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl,
} from './style';

export default memo(function TopBanner() {

    // state
    const [currentIndex, setCurrentIndex] = useState(0);

    // redux
    const dispatch = useDispatch();
    const bannerRef = useRef();
    const { topBanners } = useSelector((state) => ({
        topBanners: state.getIn(['recommend', 'topBanners']),
    }),shallowEqual);
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch]) // componentDidMount.

    // others
    const bannerChange = useCallback((from ,to) => {
        setCurrentIndex(to);
    }, [])

    const bgImage = topBanners[currentIndex]?.imageUrl + "?imageView&blur=40x20";

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className='banner wrap-v2'>
                <BannerLeft >
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item,index) => {
                                return (
                                    <div className='banner-item' key={item.imageUrl}>
                                        <img className='image' src={item.imageUrl} alt={item.typeTittle}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight />
                <BannerControl>
                    <button className={'btn left'} onClick={e => bannerRef.current.prev()} />
                    <button className={'btn right'} onClick={e => bannerRef.current.next()} />
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
