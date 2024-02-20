import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import config from '~/config';
import Search from '~/pages/Search';
import KhanCap from '~/pages/KhanCap';
import ChuanDoan from '~/pages/ChuanDoan';
import KyNang from '~/pages/KyNang';
import ThucHanh from '~/pages/ThucHanh';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import KhanCapDetail from '~/pages/KhanCapDetail';
import Payment from '~/pages/Payment';
import ThucHanhDetail from '~/pages/ThucHanhDetail';
import ResetPassword from '~/pages/ResetPassword';
import ChangePassword from '~/pages/ChangePassword';
import ChangePasswordSucess from '~/pages/ChangePasswordSuccess';
import ErrorPage from '~/pages/ErrorPage';

const publicRoutes = [
    // { path: '/', component: Home },
    // { path: '/following', component: Following },
    // { path: '/profile', component: Profile },
    // { path: '/upload', component: Upload, layout: HeaderOnly },
    // { path: '/search', component: Search, layout: null },

    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.login, component: Login },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.khancap, component: KhanCap },
    { path: config.routes.chuandoan, component: ChuanDoan },
    { path: config.routes.kynang, component: KyNang },
    { path: config.routes.thuchanh, component: ThucHanh },
    { path: config.routes.thuchanhdetail, component: ThucHanhDetail },
    { path: config.routes.register, component: Register },
    { path: config.routes.khancapdetail, component: KhanCapDetail },
    { path: config.routes.payment, component: Payment },
    { path: config.routes.resetpassword, component: ResetPassword },
    { path: config.routes.changepassword, component: ChangePassword },
    { path: config.routes.changepasswordsuccess, component: ChangePasswordSucess },
    { path: config.routes.error, component: ErrorPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
