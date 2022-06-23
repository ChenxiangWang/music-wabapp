import React, {memo} from 'react';
import { NavLink } from 'react-router-dom';

export default memo(function MyHeader() {
    return (
        <div>
            <NavLink to="/discover">Discover</NavLink>
            <NavLink to="/mine">My Playlist</NavLink>
            <NavLink to="/friend">Friend</NavLink>
        </div>
    )
})