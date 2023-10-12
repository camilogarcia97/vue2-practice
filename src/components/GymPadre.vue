<template>
  <div class="padre">
    <h1>Gym Padre</h1>
    <h2>{{ numeroHijo }}</h2>
    <br />
    <h6>Aumentar numero en hijo</h6>
    <button @click="subirPadre">+</button>
    <button @click="bajarPadre">-</button>
    <GymHijo :np="numeroPadre" @enviando="numeroHijo = $event"></GymHijo>
  </div>
</template>

<script>
import GymHijo from "@/components/GymHijo.vue";
/* import */
export default {
  components: { GymHijo },
  name: "GymPadre",

  data() {
    return {
      numeroPadre: 0,
      numeroHijo: 0,
    };
  },

  methods: {
    subirPadre() {
      this.numeroPadre++;
    },

    bajarPadre() {
      this.numeroPadre--;
    },
  },

  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.padre {
  /* campo de texto */
  width: 420px;
  height: 660px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(238, 150, 17);
}

h6 {
  margin: 0px;
}

h2 {
  margin: 0px;
}

button {
  width: 100px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgb(12, 228, 30);
}
</style>
