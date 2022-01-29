<template>
  <div>
    <p class="cursor-pointer my-2" @click="Buscar"><strong>{{ item }}</strong></p>
    <hr>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  props: ['item'],
  computed: {
    ...mapState('modHistorial', ["historial"]),
  },
  methods: {
    ...mapActions('ListMod', ['fetchGifs']),
    Buscar() {
      this.fetchGifs(this.item)
    }
  }
}
</script>