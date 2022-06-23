import React, {memo} from 'react';
import { useRoutes } from "react-router-dom";
import routes from './router';
import MyHeader from '@/components/app-header';
import MyFooter from '@/components/app-footer';

export default memo(function App() {
    let element = useRoutes(routes);
    return (
        <>
            <MyHeader />
            {element}
            <MyFooter />
        </>
    );
})