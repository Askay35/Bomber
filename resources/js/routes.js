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
        path: '/faq',
        component: Default,
        children: [
            {
                path: '/',
                component: () => import("./components/pages/FAQ")
            }
        ]
    },
    {
        path: '/faq',
        component: Default,
        children: [
            {
                path: '/',
                component: () => import("./components/pages/Ref")
            }
        ]
    }
];
export default routes;
