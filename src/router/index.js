import Mine from '@/pages/mine';
import Discover from '@/pages/discover';
import Friend from '@/pages/friend';

const routes = [
        {
            path: "mine",
            element: <Mine/>
        },
        {
            path: "/",
            element: <Discover/>
        },
        {
            path: "friend",
            element: <Friend/>
        }
    ]
;
export default routes;