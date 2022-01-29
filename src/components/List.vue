<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
      <div v-for="item in lista" :key="item.id" class="rounded">
        <img class="mb-2" :src=item.images.original.url :alt=item.id>
        <p class="text-blue-700"><strong>Título: {{ item.title }}</strong></p>
      </div>
    </div>
    <div v-show="!lista.length" class="bg-blue-300 border border-l-8 border-blue-600 text-blue-700 p-4" role="alert">
      No se han encontrado resultados con ese término..
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  mounted() {
    this.fetchGifs('hulk')
  },
  methods: {
    ...mapActions('ListMod', ['fetchGifs'])
  },
  computed: {
    ...mapState('ListMod', ['lista'])
  }
}
</script>