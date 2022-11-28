
export const state = () => ({
    genres: [],
    now_playing: [],
    user: false,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileId: null,
    profileInitials: null,
})

export const mutations = {
    SET_GENRES(state, genres) {
        state.genres = genres
    },
    SET_NOWPLAYING(state, data) {
        state.now_playing = data
    },
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
        if (authUser) {
            const { uid, email, displayName } = authUser;
            state.user = { uid, email, displayName };
        } else {
            state.user = false;
        }
    },
    updateUser(state, payload) {
        state.user = payload;
    },
    setProfileInfo(state, doc) {
        state.profileId = doc.id;
        state.profileEmail = doc.email;
        state.profileFirstName = doc.firstName;
        state.profileLastName = doc.lastName;
    },
    setProfileInitials(state) {
        state.profileInitials =
            state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
        state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
        state.profileLastName = payload;
    },
}

export const actions = {
    async loadGenres({ state, commit }) {
        try {
            const data = await this.$axios.$get('/genre/movie/list')
            if (data) {
                commit('SET_GENRES', data.genres)
            }
        } catch (e) {

            console.log(e);
        }
    },
    async loadNowPlaying({ state, commit }) {
        try {
            const data = await this.$axios.$get('/movie/now_playing')
            if (data) {
                commit('SET_NOWPLAYING', data.results.slice(0, 3))
            }
        } catch (e) {

            console.log(e);
        }
    },
    async getCurrentUser({ commit }, user) {
        try {
            const dataBase = await this.$fire.firestore.collection("users").doc(this.$fire.auth.currentUser.uid).get();
            const dbResults = await dataBase.data();
            if (dbResults) {
                commit("setProfileInfo", dbResults);
                commit("setProfileInitials");
            }
        } catch (e) {
            console.log(e);
        }
    },
    async updateUserSettings({ commit, state }) {

        try {
            const dataBase = await this.$fire.firestore.collection("users").doc(this.$fire.auth.currentUser.uid);
            await dataBase.update({
                firstName: state.profileFirstName,
                lastName: state.profileLastName,
            });
            commit("setProfileInitials");
        } catch (e) {
            console.log(e);
        }
    },
}