import React, { memo,useEffect } from 'react';
import { connect } from 'react-redux';
import { getTopBannerAction } from './store/action'

function Recommand(props) {
    const { getBanners, topBanners } = props;

    useEffect(() => {
        getBanners();
    }, []) // componentDidMount.

    return (
        <div>
            Recommand: { topBanners.length }
        </div>
    )
}
const mapStateToProps = state => ({
    topBanners : state.recommend.topBanners,
})

const mapDispatchToProps = dispatch => ({
    getBanners : () => dispatch(getTopBannerAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommand));
