import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

const publicRoutes = [
    // { path: '/', component: Home },
    // { path: '/following', component: Following },
    // { path: '/profile', component: Profile },
    // { path: '/upload', component: Upload, layout: HeaderOnly },
    // { path: '/search', component: Search, layout: null },

    { path: '/', component: Home },
    { path: '/profile', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
