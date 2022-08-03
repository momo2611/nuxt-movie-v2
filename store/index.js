export const state = () => ({
    genres: [],
    now_playing: [],
    user: false
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
}