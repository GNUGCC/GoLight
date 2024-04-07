import {
    createRouter,
    createMemoryHistory
} from "@ionic/vue-router";

const routes = [{
    path: "/",
    redirect: "/home"
}, {
    name: "Attraction",
    path: "/attraction/:id",
    component: () => import("@/views/Attraction.vue")
}, {
    name: "AttractionList",
    path: "/attraction-list/:id",
    component: () => import("@/views/AttractionList.vue")
}, {
    name: "CompletedItem",
    path: "/completed-item/:order_id/:id",
    meta: {requiresAuth: true},
    component: () => import("@/views/CompletedItem.vue")
}, {
    name: "CouponList",
    path: "/coupon-list/:id",
    meta: {requiresAuth: true},
    component: () => import("@/views/CouponList.vue")
}, {
    name: "Family",
    path: "/family/:id",
    meta: {requiresAuth: true},
    component: () => import("@/views/Family.vue")
}, {
    name: "FamilyList",
    path: "/family-list",
    meta: {requiresAuth: true},
    component: () => import("@/views/FamilyList.vue")
}, {
    name: "ForgotForm",
    path: "/forgot-form",
    component: () => import("@/views/ForgotForm.vue")
}, {
    name: "Home",
    path: "/home",
    component: () => import("@/views/Home.vue")
}, {
    name: "LoginForm",
    path: "/login-form",
    component: () => import("@/views/LoginForm.vue")
}, {
    name: "MemberInfo",
    path: "/member-info",
    meta: {requiresAuth: true},
    component: () => import("@/views/MemberInfo.vue")
}, {
    name: "NewFamily",
    path: "/new-family",
    meta: {requiresAuth: true},
    component: () => import("@/views/NewFamily.vue")
}, {
    name: "NewOrder",
    path: "/new-order/:id",
    meta: {requiresAuth: true},
    component: () => import("@/views/NewOrder.vue")
}, {
    name: "NewOrderItem",
    path: "/new-order-item/:id/:timestamp?",
    meta: {requiresAuth: true},
    component: () => import("@/views/NewOrderItem.vue")
}, {
    name: "News",
    path: "/news/:id",
    component: () => import("@/views/News.vue")
}, {
    name: "NewsList",
    path: "/news-list/:id",
    component: () => import("@/views/NewsList.vue")
}, {
    name: "Order",
    path: "/order/:id",
    meta: {requiresAuth: true},
    component: () => import("@/views/Order.vue")
}, {
    name: "OrderCompleted",
    path: "/order-completed/:id",
    meta: {requiresAuth: true},
    component: () => import("@/views/OrderCompleted.vue")
}, {
    name: "OrderList",
    path: "/order-list",
    meta: {requiresAuth: true},
    component: () => import("@/views/OrderList.vue")
}, {
    name: "RegisterForm",
    path: "/register-form",
    component: () => import("@/views/RegisterForm.vue")
}, {
    name: "Temple",
    path: "/temple/:id",
    component: () => import("@/views/Temple.vue")
}, {
    name: "TempleList",
    path: "/temple-list/:keyword?",
    component: () => import("@/views/TempleList.vue")
}, {
    name: "VerifyForgotForm",
    path: "/verify-forgot-form/:token",
    component: () => import("@/views/VerifyForgotForm.vue")
}, {
    name: "VerifyRegisterForm",
    path: "/verify-register-form/:token",
    component: () => import("@/views/VerifyRegisterForm.vue")
}];

export default createRouter({
    history: createMemoryHistory(process.env.BASE_URL),
    routes
});
