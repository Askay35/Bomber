import Default from "./components/layouts/Default";

let routes = [
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '/',
                component: () => import("./components/pages/Home")
            }
        ]
    },
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '/faq',
                component: () => import("./components/pages/FAQ")
            }
        ]
    },
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '/ref',
                component: () => import("./components/pages/Ref")
            }
        ]
    }
];
export default routes;
