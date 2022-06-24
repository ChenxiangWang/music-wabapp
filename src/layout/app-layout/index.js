import React, {memo} from 'react';
import { Outlet } from "react-router-dom";
import MyHeader from '@/components/app-header';
import MyFooter from '@/components/app-footer';
export default memo(function AppLayout() {
    return (
        <div>
            <MyHeader />
            <Outlet />
            <MyFooter />
        </div>
    );
})