import React, {memo, useEffect, useRef} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import {getNewAlbumAction} from '../../store/action';

import {Carousel} from 'antd';
import HYAlbumCover from '@/components/album-cover';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import {AlbumWrapper} from './style';

import {getNewAlbumsAction} from '../../store/action';

export default memo(function NewAlbum() {
    //state

    //redux
    const dispatch = useDispatch();
    const {albums} = useSelector((state) => ({
        albums: state.getIn(['recommend', 'newAlbums']),
    }), shallowEqual)

    //others
    useEffect(() => {
        dispatch(getNewAlbumsAction(10))
    }, [dispatch]);
    const pageRef = useRef();

    return (
        <AlbumWrapper>
            <ThemeHeaderRCM title={'新品'}/>
            <div className="content">
                <button className="arrow arrow-left sprite_02"
                        onClick={e => pageRef.current.prev()}
                />
                <div className="album">
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0, 1].map(item => {
                                return <div key={item} className="page">
                                    {
                                        albums.slice(item * 5, (item + 1) * 5).map(i => {
                                            return <HYAlbumCover key={i.id}
                                                                 info={i}
                                                                 size={100}
                                                                 width={118}
                                                                 bgp="-570px" />
                                        })
                                    }
                                </div>
                            })
                        }
                    </Carousel>
                </div>

                <button className="arrow arrow-right sprite_02"
                        onClick={e => pageRef.current.next()}
                />
            </div>
        </AlbumWrapper>
    )
})
