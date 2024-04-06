import {createStore} from "vuex";

export default createStore({
    mutations: {
        add(state, item) {
            let items = state.items.filter(record => record.temple_id === item.temple_id && record.timestamp != item.timestamp);
            items.push(item);
            state.items = items;
        },
        addCoupon(state, coupon) {
            let coupons = state.coupons.filter(record => record.code !== coupon.code);
            coupons.push(coupon);
            state.coupons = coupons;
        },
        login(state, token) {
            state.token = token;
        },
        logout(state) {
            state.token = null;
        },
        purge(state) {
            state.coupons = state.coupons.filter(record => !record.checked);
            state.items = [];
        },
        setCoords(state, coords) {
            state.coords = coords;
        },
        remove(state, item) {
            state.items = state.items.filter(record => record.timestamp != item.timestamp);
        }
    },
    plugins: [
        (store) => {
            store.subscribe((mutation, state) => {
                localStorage.setItem("data", JSON.stringify(state));
            });
        }
    ],
    state() {
        let data = localStorage.getItem("data");
        let state = {coords: {}, coupons: [], items: [], token: null};

        return data ? Object.assign(state, JSON.parse(data)) : state;
    }
});
