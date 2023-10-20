import type AuthR from "../data/auth/authR";

import router from "@/router";

export function authRenderRouter(auth: AuthR) {
    switch (auth.role) {
        case "admin":
            router.addRoute({
                path: '/webrtc/:room',
                name: 'webrtcRoom',
                component: () => import('@/views/LiveHome.vue'),
            })
            break;
        case "vip":
            router.addRoute({
                path: '/webrtc/:room',
                name: 'webrtcRoom',
                component: () => import('@/views/LiveHome.vue'),
            })
            break;
        case "normal":
            router.addRoute({
                path: '/webrtc/:room',
                name: 'webrtcRoom',
                component: () => import('@/views/LiveHome.vue'),
            })
            break;

        default:
            break;
    }
}