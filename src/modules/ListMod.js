export default {
    namespaced: true,
    state: {
        lista: [],
        isLoading: false
    },
    mutations: {
        setList(state, datos) {
            state.lista = datos
        },
        setLoading() {
            this.state.isLoading = !this.state.isLoading
        }
    },
    actions: {
        async fetchGifs(context, termino) {
            context.commit('setLoading')
            try {
                const data = await fetch('https://api.giphy.com/v1/gifs/search?mi_api_key&q=' + termino + '&limit=45')
                const datos = await data.json()
                context.commit('ListMod/setList', datos["data"], {root: true})
                context.commit('modHistorial/setHistorial', termino, {root: true})

            } catch (e) {
                console.log(e.message)
            } finally {
                context.commit('setLoading')
            }
        }
    }
}
