
export default {
    namespaced: true,
    state:{
        historial: []
    },
    mutations:{
        setHistorial(state, termino){
            if((! state.historial.includes(termino)) && (termino !== '')){
                state.historial.unshift(termino)
            }
        }
    }
}