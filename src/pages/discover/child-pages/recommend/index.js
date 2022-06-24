import React, { memo,useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getTopBannerAction } from './store/action'

function Recommand(props) {

    const dispatch = useDispatch();

    const { topBanners } = useSelector((state) => ({
        topBanners: state.recommend.topBanners,
    }));

    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch]) // componentDidMount.

    return (
        <div>
            Recommand: { topBanners.length }
        </div>
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
