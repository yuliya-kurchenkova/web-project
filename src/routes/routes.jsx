import UserPage from "../pages/UsersPage/UserPage";
import AdminPage from "../pages/AdminPage/AdminPage";

const routes = {
    userPage: {
        url: '/',
        component: UserPage,
    },
    adminPage: {
        url: '/admin',
        component: AdminPage,
    }
}
export default routes;