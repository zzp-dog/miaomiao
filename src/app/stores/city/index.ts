import LocalStorage from '@/app/shared/db/LocalStorage';

const state = {
    nm: LocalStorage.getItem('nm') || '北京',
    id: LocalStorage.getItem('id') || 1
};
const mutations = {
    CITY_INFO(st: any, payload: any) {
        st.nm = payload.nm;
        st.id = payload.id;
    }
};
const actions = {

};
export default {
    namespaced: true,
    state,
    mutations,
    actions
};
