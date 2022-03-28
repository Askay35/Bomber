import Default from "./components/layouts/Default";

let routes = [
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '/',
                component: () => import("./components/games/Mines")
            }
        ]
    },
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '/withdraw',
                component: () => import("./components/money/Withdraw")
            }
        ]
    },
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '/pay',
                component: () => import("./components/money/Pay")
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
    },
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '/dice',
                component: () => import("./components/games/Dice")
            }
        ]
    }
];
export default routes;
