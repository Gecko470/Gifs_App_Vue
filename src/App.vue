<template>
  <div id="app" class="flex mt-8 container mx-auto">
    <div class="w-auto md:px-3 min-h-screen bg-blue-500 text-center text-white rounded ml-2">
      <div class="text-4xl py-5 px-2">
        <strong>Gifs App</strong>
      </div>
      <hr/>
      <div v-if="historial.length">
        <div v-for="item in historial" :key="item">
          <Historial :item="item"></Historial>
        </div>
      </div>
    </div>
    <div class="mx-2 md:mx-6 w-full">
      <div class="flex my-7">
        <input
            class="w-full bg-gray-100 pl-3 border border-blue-500"
            type="text"
            placeholder="Buscar.."
            v-model="termino"
        />
        <button
            class="
            rounded
            text-xs
            md:text-2xl
            bg-transparent
            text-blue-500
            hover:bg-blue-500
            hover:text-white
            border-2 border-blue-500
            text-white
            px-3
            py-1
            ml-5
          "
            @click="Buscar"
        >
          <strong>Buscar</strong>
        </button>
      </div>
      <list></list>
      <div v-show="isLoading" class="flex items-center justify-center ">
        <div style="border-top-color:transparent"
             class="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
      </div>

    </div>
  </div>
</template>

<script>
import List from '@/components/List'
import Historial from "@/components/Historial";
import {mapActions, mapState} from "vuex";

export default {
  components: {
    List, Historial
  },
  data() {
    return {
      termino: ''
    }
  },
  computed: {
    ...mapState('modHistorial', ['historial']),
    ...mapState('ListMod', ['isLoading'])
  },
  methods: {
    ...mapActions('ListMod', ['fetchGifs']),
    Buscar(termino) {
      this.fetchGifs(this.termino)
      this.termino = ''
    }
  }
}
</script>

