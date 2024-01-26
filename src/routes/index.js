import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Resgister from '~/pages/Resgister';

const publicRoutes = [
    // { path: '/', component: Home },
    // { path: '/following', component: Following },
    // { path: '/profile', component: Profile },
    // { path: '/upload', component: Upload, layout: HeaderOnly },
    // { path: '/search', component: Search, layout: null },

    { path: '/', component: Home },
    { path: '/resgister', component: Resgister },
    { path: '/profile', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
