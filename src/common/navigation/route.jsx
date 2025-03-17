import AxiosPage from "../../page/AxiosPage/AxiosPage";
import Home from "../../page/Home/Home";
import Mui from "../../page/Mui/Mui";

const route = [
    {
        name: 'Home',
        path: '/home',
        component: <Home/>
    },
    {
        name: 'Mui',
        path: '/mui',
        component: <Mui/>
    },
    {
        name: 'Axios Page',
        path: '/axios-page',
        component: <AxiosPage/>
    }
];

export default route;