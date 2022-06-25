import React, { memo,useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTopBannerAction } from './store/action'

function Recommand(props) {

    const dispatch = useDispatch();

    /**
     *  useSelector: 有时候会影响性能
     *  因为 useSelector 传入的是个函数，这个函数每次返回都是一个新的对象，即使数据本身没有发生改变，也会造成页面的重新更新
     *  所以，我们一般会传入第二个函数，来定义自己的状态比较
     * */

    const { topBanners } = useSelector((state) => ({
        topBanners: state.recommend.topBanners,
    }),shallowEqual);

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
